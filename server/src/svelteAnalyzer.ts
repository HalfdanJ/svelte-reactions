import { Component, parse } from "svelte/compiler";
import { CompileOptions, walk } from "svelte/types/compiler";
import { Hover, MarkupKind, Position, Range } from "vscode-languageserver";
import * as fs from "fs";
import * as util from "util";

export function analyze(source: string) {
  // console.time("analyze");
  const options: CompileOptions = {
    name: "MyComponent",
  };
  try {
    const ast = parse(source, options);
    const component = new Component(
      ast,
      source,
      options.name || "",
      options,
      {} as any,
      []
    );
    // component.generate();
    // fs.writeFileSync("../dump.js", util.inspect(component, { depth: null }));
    return component;
  } catch (e) {
    console.log(e);
    return undefined;
  }
  // component.generate();

  // console.dir(component, { depth: null });

  // console.timeEnd("analyze");
}

function isPositionInSourceLocation(
  position: Position,
  sourceLocation: {
    start: { line: number; column: number };
    end: { line: number; column: number };
  }
) {
  return (
    (sourceLocation.start.line < position.line + 1 &&
      sourceLocation.end.line > position.line + 1) ||
    ((sourceLocation.start.line < position.line + 1 ||
      (sourceLocation.start.line == position.line + 1 &&
        sourceLocation.start.column <= position.character)) &&
      (sourceLocation.end.line > position.line + 1 ||
        (sourceLocation.end.line == position.line + 1 &&
          sourceLocation.end.column >= position.character)))
  );
}

type ReactiveDeclaration =
  (typeof Component.prototype.reactive_declarations)[0];

type Annotation = {
  name: string;
  range: Range;
};

function rangeFromNodePositions(node: any) {
  return {
    start: {
      line: node.loc.start.line - 1,
      character: node.loc.start.column,
    },
    end: {
      line: node.loc.end.line - 1,
      character: node.loc.end.column,
    },
  };
}

function findDependents(name: string, component: Component): Annotation[] {
  if (!component.var_lookup.get(name)?.is_reactive_dependency) return [];

  const directDependents = component.reactive_declarations.filter((rd) =>
    rd.dependencies.has(name)
  );
  return [
    ...directDependents.map((dd) => ({
      name: [...dd.assignees.values()].join(", "),
      range: rangeFromNodePositions(dd.node),
    })),
    ...directDependents
      .flatMap((dd) => [...dd.assignees.values()])
      .filter((n) => n != name)
      .flatMap((dd) => findDependents(dd, component)),
  ];
}

function findDepencies(
  decl: ReactiveDeclaration,
  component: Component
): Annotation[] {
  // return [];
  const dependencyNames = [...decl.dependencies.values()];
  const reactiveDeclarationAssignments = dependencyNames
    .flatMap((dep) =>
      component.reactive_declarations.filter((rd) => rd.assignees.has(dep))
    )
    .filter((rd) => rd != decl);

  const nodeDeclarations = dependencyNames
    .flatMap((dep) => ({
      name: dep,
      node: component.node_for_declaration.get(dep),
    }))
    .filter((nd) => nd.node);

  const res = reactiveDeclarationAssignments.map((dd) => ({
    name: [...dd.assignees.values()].join(", "),
    range: rangeFromNodePositions(dd.node),
  }));

  if (nodeDeclarations) {
    res.push(
      ...nodeDeclarations.map((nd) => ({
        name: nd.name,
        range: rangeFromNodePositions(nd.node),
      }))
    );
  }

  res.push(
    ...reactiveDeclarationAssignments.flatMap((rd) =>
      findDepencies(rd, component)
    )
  );

  return res;
}

export function getPositionInfo(
  component: Component,
  position: Position
): {
  contents: Hover["contents"];
  dependents: Annotation[];
  dependencies: Annotation[];
} | null {
  const dependentDeclarations: Annotation[] = [];
  const dependencyDeclarations: Annotation[] = [];

  const declarationNode = component.vars.find((v) => {
    const dec = component.node_for_declaration.get(v.name);
    return dec?.loc && isPositionInSourceLocation(position, dec.loc);
  });

  if (declarationNode) {
    dependentDeclarations.push(
      ...findDependents(declarationNode.name, component)
    );
  }

  const reactiveDeclaration = component.reactive_declarations.find(
    (rd) => rd.node.loc && isPositionInSourceLocation(position, rd.node.loc)
  );

  if (reactiveDeclaration) {
    dependencyDeclarations.push(
      ...findDepencies(reactiveDeclaration, component)
    );

    const assignees = [...reactiveDeclaration.assignees.values()];
    dependentDeclarations.push(
      ...assignees.flatMap((a) => findDependents(a, component))
    );
  }

  // console.log(dependentDeclarations);

  return {
    contents: {
      kind: MarkupKind.Markdown,
      value: `${JSON.stringify(declarationNode, null, 2)}`,
    },
    dependents: dependentDeclarations,
    dependencies: dependencyDeclarations,
  };

  // range: node.loc
  //   ? {
  //       start: {
  //         line: node.loc.start.line - 1,
  //         character: node.loc.start.column,
  //       },
  //       end: {
  //         line: node.loc.end.line - 1,
  //         character: node.loc.end.column,
  //       },
  //     }
  // : undefined,

  // walk(component., {)
}
