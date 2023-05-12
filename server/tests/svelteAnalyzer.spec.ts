import { describe, expect, it } from "vitest";
import { analyze, getPositionInfo } from "../src/svelteAnalyzer";
import * as fs from "fs";

const FIXTURE = fs.readFileSync("./tests/fixtures/test.svelte", "utf-8");

describe("svelteAnalyzer", () => {
  const component = analyze(FIXTURE)!;

  it("can analyze source", () => {
    expect(component).toBeDefined();
  });

  it.only("can get hover info", () => {
    const hoverInfo = getPositionInfo(component, { line: 5 - 1, character: 8 });
    expect(hoverInfo).toBeDefined();

    expect(hoverInfo?.dependents).toEqual([{}]);
  });
  // it("can get hover info", () => {
  //   const hoverInfo = getPositionInfo(component, { line: 1, character: 15 });
  //   expect(hoverInfo).toBeDefined();

  //   expect(hoverInfo?.dependents).toEqual([{}]);
  // });

  it("can get null", () => {
    const hoverInfo2 = getPositionInfo(component, { line: 1, character: 1 });
    expect(hoverInfo2).toBeNull();
  });
});
