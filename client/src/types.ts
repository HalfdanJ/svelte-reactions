import { Hover, Range } from "vscode";

export interface Annotation {
  range: Range;
}

export type SvelteHoverInfo = {
  contents: Hover["contents"];
  dependents: Annotation[];
  dependencies: Annotation[];
} | null;
