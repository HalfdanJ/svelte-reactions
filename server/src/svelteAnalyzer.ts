import { Component, parse } from "svelte/compiler";
import { Hover, MarkupKind, Position, Range } from "vscode-languageserver";
import * as fs from "fs";
import * as util from "util";
import { ITranspiledSvelteDocument } from "svelte-language-server/dist/src/plugins/svelte/SvelteDocument";
import { Node } from "estree";
import { CompileOptions } from "svelte/types/compiler";
import { INode } from "svelte/types/compiler/compile/nodes/interfaces";
import Fragment from "svelte/types/compiler/compile/nodes/Fragment";

export function analyze(source: string) {
  const options: CompileOptions = {};
  try {
    const ast = parse(source, options);
    const component = new Component(ast, source, "", options, {} as any, []);
    fs.writeFileSync("../dump.js", util.inspect(component, { depth: null }));
    return component;
  } catch (e) {
    // console.log(e);
    return undefined;
  }
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
  range: Range;
  $range?: Range;
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

function findDependents(name: string, component: Component): Node[] {
  if (
    !component.var_lookup.get(name)?.referenced_from_script &&
    !component.var_lookup.get(name)?.is_reactive_dependency
  )
    return [];

  const directDependents = component.reactive_declarations.filter(
    (rd) => rd.dependencies.has(name) || rd.dependencies.has(`$${name}`)
  );

  return [
    ...directDependents.map((dd) => dd.node),
    ...directDependents
      .flatMap((dd) => [...dd.assignees.values()])
      .filter((n) => n != name)
      .flatMap((dd) => findDependents(dd, component)),
  ];
}

function findDepencies(
  decl: ReactiveDeclaration,
  component: Component
): Node[] {
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

  const res = reactiveDeclarationAssignments.map((dd) => dd.node);
  if (nodeDeclarations) {
    res.push(...nodeDeclarations.map((nd) => nd.node).filter(notEmpty));
  }

  res.push(
    ...reactiveDeclarationAssignments.flatMap((rd) =>
      findDepencies(rd, component)
    )
  );

  return res;
}

function transformAnnotationPosition(
  range: Annotation["range"],
  transpiledSvelteDocument: ITranspiledSvelteDocument
) {
  return {
    start: transpiledSvelteDocument.getOriginalPosition(range.start),
    end: transpiledSvelteDocument.getOriginalPosition(range.end),
  };
}

function annotationFromNode(
  node: Node,
  transpiledSvelteDocument: ITranspiledSvelteDocument
): Annotation {
  return {
    range: transformAnnotationPosition(
      rangeFromNodePositions(node),
      transpiledSvelteDocument
    ),
    $range:
      node.type === "LabeledStatement" && node.label.name === "$"
        ? transformAnnotationPosition(
            rangeFromNodePositions(node.label),
            transpiledSvelteDocument
          )
        : undefined,
  };
}

export function getPositionInfo(
  component: Component,
  position: Position,
  transpiledSvelteDocument: ITranspiledSvelteDocument
): {
  contents: Hover["contents"];
  dependents: Annotation[];
  dependencies: Annotation[];
} | null {
  // Convert the position to the position in the transpiled document
  const transpiledPosition =
    transpiledSvelteDocument.getGeneratedPosition(position);

  const dependentDeclarations: Annotation[] = [];
  const dependencyDeclarations: Annotation[] = [];

  // Find declaration node for the position
  const declarationNode = component.vars.find((v) => {
    const dec = component.node_for_declaration.get(v.name);
    return dec?.loc && isPositionInSourceLocation(transpiledPosition, dec.loc);
  });

  const touchedNames: string[] = [];

  // Find all nodes that depend on the current node
  if (declarationNode) {
    touchedNames.push(declarationNode.name);
  }

  // Find the reactive declaration for the current position
  const reactiveDeclaration = component.reactive_declarations.find(
    (rd) =>
      rd.node.loc && isPositionInSourceLocation(transpiledPosition, rd.node.loc)
  );

  if (reactiveDeclaration) {
    // Find all dependencies of the reactive declaration
    dependencyDeclarations.push(
      ...findDepencies(reactiveDeclaration, component).map((node) =>
        annotationFromNode(node, transpiledSvelteDocument)
      )
    );

    // Find all other reactive declarations that depend
    const assignees = [...reactiveDeclaration.assignees.values()];
    touchedNames.push(...assignees);
  }

  // walk(component.fragment as any, (node) => {
  //   const inode = node as unknown as INode;
  //   if (inode.type === "MustacheTag") {
  //     if (
  //       touchedNames.some((name) => inode.expression?.dependencies?.has(name))
  //     ) {
  //       console.log(node);
  //       //     console.log(inode);
  //     }
  //   }
  // });

  for (const name of touchedNames) {
    console.log(name);
    dependentDeclarations.push(
      ...findDependents(name, component).map((node) =>
        annotationFromNode(node, transpiledSvelteDocument)
      )
    );
  }

  return {
    contents: {
      kind: MarkupKind.Markdown,
      value: `${JSON.stringify(declarationNode, null, 2)}`,
    },
    dependents: dependentDeclarations,
    dependencies: dependencyDeclarations,
  };
}

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

// function walk(node: INode, callback: (node: INode) => void) {
//   callback(node);
//   const casted = node as unknown as Fragment;
//   if (casted.children) {
//     casted.children.forEach((node) => walk(node, callback));
//   }
// }
