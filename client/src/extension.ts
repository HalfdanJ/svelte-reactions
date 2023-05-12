/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from "path";
import { Hover, OverviewRulerLane, TextEditorDecorationType } from "vscode";
import { languages } from "vscode";
import {
  workspace,
  ExtensionContext,
  window,
  TextEditor,
  DecorationOptions,
  Range,
  Position,
} from "vscode";

import { SvelteHoverInfo } from "./types";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

let client: LanguageClient;

let dependentsDecorations: TextEditorDecorationType | undefined;
let dependenciesDecorations: TextEditorDecorationType | undefined;

function decorate(editor: TextEditor, info: SvelteHoverInfo | null) {
  dependentsDecorations?.dispose();
  dependentsDecorations = undefined;

  dependenciesDecorations?.dispose();
  dependenciesDecorations = undefined;

  if (!info) return;

  const decorationsArray: DecorationOptions[] = [];
  const dependencyArray: DecorationOptions[] = [];

  dependentsDecorations = window.createTextEditorDecorationType({
    outlineColor: "rgba(120,120,255,0.6)",
    outlineStyle: "dashed",
    borderRadius: "3px",
  });
  dependenciesDecorations = window.createTextEditorDecorationType({
    outlineColor: "rgba(80,200,80,0.6)",
    outlineStyle: "dashed",
    borderRadius: "3px",
    // overviewRulerColor: "rgba(80,200,80,0.6)",
    // overviewRulerLane: OverviewRulerLane.Right,
  });

  for (const dependent of info.dependents) {
    const range = new Range(
      new Position(dependent.range.start.line, dependent.range.start.character),
      new Position(dependent.range.end.line, dependent.range.end.character)
    );
    decorationsArray.push({ range });
  }
  for (const dep of info.dependencies) {
    const range = new Range(
      new Position(dep.range.start.line, dep.range.start.character),
      new Position(dep.range.end.line, dep.range.end.character)
    );
    dependencyArray.push({ range });
  }

  editor.setDecorations(dependentsDecorations, decorationsArray);
  editor.setDecorations(dependenciesDecorations, dependencyArray);
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

  window.onDidChangeTextEditorSelection(async (event) => {
    const document = event.textEditor.document;
    const position = event.selections[0].active;
    const info: SvelteHoverInfo = await client.sendRequest(
      "svelteReactions/getHoverInfo",
      {
        uri: document.uri.toString(),
        position: position,
      }
    );

    console.log("HEP HEY");
    console.log(info);
    decorate(window.activeTextEditor, info);
  });

  // languages.registerSelectionRangeProvider("svelte", {
  //   async provideSelectionRanges(document, positions, token) {
  //     console.warn(positions);
  //     const info: SvelteHoverInfo = await client.sendRequest(
  //       "svelteReactions/getHoverInfo",
  //       {
  //         uri: document.uri.toString(),
  //         position: positions[0],
  //       }
  //     );

  //     console.log("HEP HEY");
  //     console.log(info);
  //     decorate(window.activeTextEditor, info);
  //     token.onCancellationRequested(() => {
  //       dependentsDecorations?.dispose();
  //       console.warn("cancelled");
  //     });
  //     // return new Hover(JSON.stringify(info));
  //     return [];
  //   },
  // });
  // languages.registerHoverProvider("svelte", {
  //   async provideHover(document, position, token) {
  //     const info: SvelteHoverInfo = await client.sendRequest(
  //       "svelteReactions/getHoverInfo",
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
