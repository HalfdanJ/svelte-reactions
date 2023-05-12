import { Hover, Range } from "vscode";

export type SvelteHoverInfo = {
  contents: Hover["contents"];
  dependents: {
    name: string;
    range: Range;
  }[];
  dependencies: {
    name: string;
    range: Range;
  }[];
} | null;
