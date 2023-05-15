import {
  DidChangeConfigurationNotification,
  InitializeParams,
  InitializeResult,
  ProposedFeatures,
  TextDocumentSyncKind,
  TextDocuments,
  createConnection,
} from "vscode-languageserver/node";

import {
  Document,
  DocumentManager,
} from "svelte-language-server/dist/src/lib/documents";
import {
  ITranspiledSvelteDocument,
  SvelteDocument,
} from "svelte-language-server/dist/src/plugins/svelte/SvelteDocument";
import { Component } from "svelte/compiler";
import { Position, TextDocument } from "vscode-languageserver-textdocument";
import { analyze, getPositionInfo } from "./svelteAnalyzer";

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;

const docManager = new DocumentManager(
  (textDocument) => new Document(textDocument.uri, textDocument.text)
);

const svelteDocManager = new WeakMap<Document, SvelteDocument>();

function getSvelteDocument(document: Document) {
  let svelteDoc = svelteDocManager.get(document);
  if (!svelteDoc || svelteDoc.version !== document.version) {
    svelteDoc = new SvelteDocument(document);
    svelteDocManager.set(document, svelteDoc);
  }
  return svelteDoc;
}

connection.onInitialize((params: InitializeParams) => {
  const capabilities = params.capabilities;

  // Does the client support the `workspace/configuration` request?
  // If not, we fall back using global settings.
  hasConfigurationCapability = !!(
    capabilities.workspace && !!capabilities.workspace.configuration
  );
  hasWorkspaceFolderCapability = !!(
    capabilities.workspace && !!capabilities.workspace.workspaceFolders
  );

  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: {
        openClose: true,
        change: TextDocumentSyncKind.Incremental,
        save: {
          includeText: false,
        },
      },
    },
  };
  if (hasWorkspaceFolderCapability) {
    result.capabilities.workspace = {
      workspaceFolders: {
        supported: true,
      },
    };
  }
  return result;
});

connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    // Register for all configuration changes.
    connection.client.register(
      DidChangeConfigurationNotification.type,
      undefined
    );
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders((_event) => {
      connection.console.log("Workspace folder change event received.");
    });
  }
});

// The example settings
interface ExampleSettings {
  maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration((change) => {
  if (hasConfigurationCapability) {
    // Reset all cached document settings
    documentSettings.clear();
  } else {
    globalSettings = <ExampleSettings>(
      (change.settings.languageServerExample || defaultSettings)
    );
  }

  // Revalidate all open text documents
  // documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings);
  }
  let result = documentSettings.get(resource);
  if (!result) {
    result = connection.workspace.getConfiguration({
      scopeUri: resource,
      section: "svelteReactions",
    });
    documentSettings.set(resource, result);
  }
  return result;
}

// Only keep settings for open documents
documents.onDidClose((e) => {
  console.log("Document closed", e.document.uri);
  documentSettings.delete(e.document.uri);
  docManager.closeDocument(e.document.uri);
});

documents.onDidOpen((e) => {
  console.log("Document opened", e.document.uri);
  docManager.openDocument({
    uri: e.document.uri,
    text: e.document.getText(),
  });
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(async (change) => {
  connection.console.log("We received an file change event");
  const document = docManager.get(change.document.uri);
  if (!document) {
    console.log("No document found");
    return;
  }

  document.setText(change.document.getText());
  // document.update(text, 0, text.length);
  const svelteDoc = getSvelteDocument(document);

  // console.time("analyze");
  try {
    const transpiled = await svelteDoc.getTranspiled();
    const analysis = analyze(transpiled.getText());

    if (analysis) {
      documentAnalysis.set(document, { analysis, transpiled });
    } else {
      documentAnalysis.delete(document);
    }
  } catch (e) {
    console.error(e);
  }

  // console.timeEnd("analyze");
});

const documentAnalysis = new WeakMap<
  Document,
  {
    transpiled: ITranspiledSvelteDocument;
    analysis: Component;
  }
>();

connection.onRequest(
  "svelteReactions/getPositionInfo",
  (args: { uri: string; position: Position }) => {
    const document = docManager.get(args.uri);
    if (!document) return null;
    const docAnalysis = documentAnalysis?.get(document);
    if (!docAnalysis) {
      return null;
    }

    const info = getPositionInfo(
      docAnalysis.analysis,
      args.position,
      docAnalysis.transpiled
    );
    if (!info) return null;
    return info;
  }
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
