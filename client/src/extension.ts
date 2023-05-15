import * as path from "path";
import {
  DecorationOptions,
  ExtensionContext,
  Position,
  Range,
  TextEditor,
  TextEditorDecorationType,
  languages,
  window,
  workspace,
} from "vscode";

import {
  CancellationToken,
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";
import { Annotation, SvelteHoverInfo } from "./types";

let client: LanguageClient;

let dependentsDecorations: TextEditorDecorationType | undefined;
let dependenciesDecorations: TextEditorDecorationType | undefined;

function decorate(editor: TextEditor, info: SvelteHoverInfo | null) {
  dependentsDecorations?.dispose();
  dependentsDecorations = undefined;

  dependenciesDecorations?.dispose();
  dependenciesDecorations = undefined;

  console.warn("decorate", info);

  if (!info) return;

  const decorationsArray: DecorationOptions[] = [];
  const dependencyArray: DecorationOptions[] = [];

  dependenciesDecorations = window.createTextEditorDecorationType({
    isWholeLine: true,
    backgroundColor: "rgba(120,120,255,0.1)",
    border: "1px solid rgba(120,120,255,0.6)",
    borderWidth: "0 0 0 3px",
    // after: {
    //   contentText: "   dependents",
    //   color: "rgba(120,120,255,0.6)",
    // },
  });
  dependentsDecorations = window.createTextEditorDecorationType({
    // outlineColor: "rgba(80,200,80,0.6)",
    // outlineStyle: "dashed",
    // borderRadius: "3px",
    isWholeLine: true,
    backgroundColor: "rgba(80,200,80,0.1)",
    border: "1px solid rgba(80,200,80,0.6)",
    borderWidth: "0 0 0 3px",
  });

  for (const dependent of info.dependents) {
    decorationsArray.push({ range: decorationRangeFromRange(dependent.range) });
  }
  for (const dep of info.dependencies) {
    dependencyArray.push({ range: decorationRangeFromRange(dep.range) });
  }

  if (decorationsArray.length)
    editor.setDecorations(dependentsDecorations, decorationsArray);
  if (dependencyArray.length)
    editor.setDecorations(dependenciesDecorations, dependencyArray);
}

function decorationRangeFromRange(range: Annotation["range"]) {
  return new Range(
    new Position(range.start.line, range.start.character),
    new Position(range.end.line, range.end.character)
  );
}

export function activate(context: ExtensionContext) {
  // The server is implemented in node
  const serverModule = context.asAbsolutePath(
    path.join("server", "out", "server.js")
  );

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
    },
  };

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    // Register the server for svelte documents
    documentSelector: [{ scheme: "file", language: "svelte" }],
    synchronize: {
      // Notify the server about file changes to '.clientrc files contained in the workspace
      fileEvents: workspace.createFileSystemWatcher("**/.clientrc"),
    },
  };

  // Create the language client and start the client.
  client = new LanguageClient(
    "svelte-reactions",
    "Svelte Reactions",
    serverOptions,
    clientOptions
  );

  // Start the client. This will also launch the server
  client.start();

  const getInfoToken = CancellationToken.None;
  window.onDidChangeTextEditorSelection(async (event) => {
    console.log("onDidChangeTextEditorSelection");
    console.error("onDidChangeTextEditorSelection err");
    const document = event.textEditor.document;
    const position = event.selections[0].active;
    if (document.languageId !== "svelte") return;

    const info: SvelteHoverInfo = await client.sendRequest(
      "svelteReactions/getPositionInfo",
      {
        uri: document.uri.toString(),
        position: position,
      },
      getInfoToken
    );

    decorate(window.activeTextEditor, info);
  });

  // });
  // languages.registerHoverProvider("svelte", {
  //   async provideHover(document, position, token) {
  //     const info: SvelteHoverInfo = await client.sendRequest(
  //       "svelteReactions/getPositionInfo",
  //       {
  //         uri: document.uri.toString(),
  //         position: position,
  //       }
  //     );

  //     console.log("HEP HEY");
  //     console.log(info);
  //     decorate(window.activeTextEditor, info);
  //     token.onCancellationRequested(() => {
  //       dependentsDecorations?.dispose();
  //       console.warn("cancelled");
  //     });
  //     return new Hover(JSON.stringify(info));
  //   },
  // });
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
