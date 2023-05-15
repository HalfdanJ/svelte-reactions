Component {
  ignore_stack: [],
  vars: [
    {
      name: 'parent1',
      initialised: true,
      writable: true,
      imported: false,
      export_name: 'parent1'
    },
    {
      name: 'parent2',
      initialised: true,
      writable: true,
      imported: false,
      hoistable: true
    }
  ],
  var_lookup: Map(2) {
    'parent1' => {
      name: 'parent1',
      initialised: true,
      writable: true,
      imported: false,
      export_name: 'parent1'
    },
    'parent2' => {
      name: 'parent2',
      initialised: true,
      writable: true,
      imported: false,
      hoistable: true
    }
  },
  imports: [],
  exports_from: [],
  instance_exports_from: [],
  hoistable_nodes: Set(1) {
    Node {
      type: 'VariableDeclaration',
      start: 42,
      end: 64,
      loc: SourceLocation {
        start: Position { line: 3, column: 2 },
        end: Position { line: 3, column: 24 }
      },
      declarations: [
        Node {
          type: 'VariableDeclarator',
          start: 46,
          end: 63,
          loc: SourceLocation {
            start: Position { line: 3, column: 6 },
            end: Position { line: 3, column: 23 }
          },
          id: Node {
            type: 'Identifier',
            start: 46,
            end: 53,
            loc: SourceLocation {
              start: Position { line: 3, column: 6 },
              end: Position { line: 3, column: 13 }
            },
            name: 'parent2'
          },
          init: Node {
            type: 'Literal',
            start: 56,
            end: 63,
            loc: SourceLocation {
              start: Position { line: 3, column: 16 },
              end: Position { line: 3, column: 23 }
            },
            value: 'test2',
            raw: '"test2"'
          }
        }
      ],
      kind: 'let'
    }
  },
  node_for_declaration: Map(2) {
    'parent1' => Node {
      type: 'VariableDeclaration',
      start: 18,
      end: 39,
      loc: SourceLocation {
        start: Position { line: 2, column: 9 },
        end: Position { line: 2, column: 30 }
      },
      declarations: [
        Node {
          type: 'VariableDeclarator',
          start: 22,
          end: 38,
          loc: SourceLocation {
            start: Position { line: 2, column: 13 },
            end: Position { line: 2, column: 29 }
          },
          id: Node {
            type: 'Identifier',
            start: 22,
            end: 29,
            loc: SourceLocation {
              start: Position { line: 2, column: 13 },
              end: Position { line: 2, column: 20 }
            },
            name: 'parent1'
          },
          init: Node {
            type: 'Literal',
            start: 32,
            end: 38,
            loc: SourceLocation {
              start: Position { line: 2, column: 23 },
              end: Position { line: 2, column: 29 }
            },
            value: 'test',
            raw: '"test"'
          }
        }
      ],
      kind: 'let'
    },
    'parent2' => Node {
      type: 'VariableDeclaration',
      start: 42,
      end: 64,
      loc: SourceLocation {
        start: Position { line: 3, column: 2 },
        end: Position { line: 3, column: 24 }
      },
      declarations: [
        Node {
          type: 'VariableDeclarator',
          start: 46,
          end: 63,
          loc: SourceLocation {
            start: Position { line: 3, column: 6 },
            end: Position { line: 3, column: 23 }
          },
          id: Node {
            type: 'Identifier',
            start: 46,
            end: 53,
            loc: SourceLocation {
              start: Position { line: 3, column: 6 },
              end: Position { line: 3, column: 13 }
            },
            name: 'parent2'
          },
          init: Node {
            type: 'Literal',
            start: 56,
            end: 63,
            loc: SourceLocation {
              start: Position { line: 3, column: 16 },
              end: Position { line: 3, column: 23 }
            },
            value: 'test2',
            raw: '"test2"'
          }
        }
      ],
      kind: 'let'
    }
  },
  partly_hoisted: [],
  fully_hoisted: [
    Node {
      type: 'VariableDeclaration',
      start: 42,
      end: 64,
      loc: SourceLocation {
        start: Position { line: 3, column: 2 },
        end: Position { line: 3, column: 24 }
      },
      declarations: [
        Node {
          type: 'VariableDeclarator',
          start: 46,
          end: 63,
          loc: SourceLocation {
            start: Position { line: 3, column: 6 },
            end: Position { line: 3, column: 23 }
          },
          id: Node {
            type: 'Identifier',
            start: 46,
            end: 53,
            loc: SourceLocation {
              start: Position { line: 3, column: 6 },
              end: Position { line: 3, column: 13 }
            },
            name: 'parent2'
          },
          init: Node {
            type: 'Literal',
            start: 56,
            end: 63,
            loc: SourceLocation {
              start: Position { line: 3, column: 16 },
              end: Position { line: 3, column: 23 }
            },
            value: 'test2',
            raw: '"test2"'
          }
        }
      ],
      kind: 'let'
    }
  ],
  reactive_declarations: [],
  reactive_declaration_nodes: Set(0) {},
  has_reactive_assignments: false,
  injected_reactive_declaration_vars: Set(0) {},
  helpers: Map(0) {},
  globals: Map(0) {},
  indirect_dependencies: Map(0) {},
  elements: [],
  aliases: Map(0) {},
  used_names: Set(1) { 'MyComponent$' },
  globally_used_names: Set(0) {},
  slots: Map(0) {},
  slot_outlets: Set(0) {},
  name: { type: 'Identifier', name: 'MyComponent$' },
  stats: {},
  warnings: [
    {
      code: 'unused-export-let',
      message: "MyComponent$ has unused export property 'parent1'. If it is for external reference only, please consider using `export const parent1`",
      frame: '1: <script>\n' +
        '2:   export let parent1 = "test";\n' +
        '                ^\n' +
        '3:   let parent2 = "test2";\n' +
        '4: </script>',
      start: { line: 2, column: 13, character: 22 },
      end: { line: 2, column: 29, character: 38 },
      pos: 22,
      filename: undefined,
      toString: [Function: toString]
    }
  ],
  ast: {
    html: { start: null, end: null, type: 'Fragment', children: [] },
    css: undefined,
    instance: {
      type: 'Script',
      start: 0,
      end: 74,
      context: 'default',
      content: Node {
        type: 'Program',
        start: 8,
        end: 65,
        loc: SourceLocation {
          start: Position { line: 1, column: 0 },
          end: Position { line: 4, column: 0 }
        },
        body: [
          Node {
            type: 'VariableDeclaration',
            start: 18,
            end: 39,
            loc: SourceLocation {
              start: Position { line: 2, column: 9 },
              end: Position { line: 2, column: 30 }
            },
            declarations: [
              Node {
                type: 'VariableDeclarator',
                start: 22,
                end: 38,
                loc: SourceLocation {
                  start: Position { line: 2, column: 13 },
                  end: Position { line: 2, column: 29 }
                },
                id: Node {
                  type: 'Identifier',
                  start: 22,
                  end: 29,
                  loc: SourceLocation {
                    start: Position { line: 2, column: 13 },
                    end: Position { line: 2, column: 20 }
                  },
                  name: 'parent1'
                },
                init: Node {
                  type: 'Literal',
                  start: 32,
                  end: 38,
                  loc: SourceLocation {
                    start: Position { line: 2, column: 23 },
                    end: Position { line: 2, column: 29 }
                  },
                  value: 'test',
                  raw: '"test"'
                }
              }
            ],
            kind: 'let'
          }
        ],
        sourceType: 'module'
      }
    },
    module: undefined
  },
  source: '<script>\n' +
    '  export let parent1 = "test";\n' +
    '  let parent2 = "test2";\n' +
    '</script>\n',
  compile_options: { name: 'MyComponent' },
  original_ast: {
    html: { start: null, end: null, type: 'Fragment', children: [] },
    css: undefined,
    instance: {
      type: 'Script',
      start: 0,
      end: 74,
      context: 'default',
      content: {
        type: 'Program',
        start: 8,
        end: 65,
        loc: { start: { line: 1, column: 0 }, end: { line: 4, column: 0 } },
        body: [
          {
            type: 'ExportNamedDeclaration',
            start: 11,
            end: 39,
            loc: {
              start: { line: 2, column: 2 },
              end: { line: 2, column: 30 }
            },
            declaration: {
              type: 'VariableDeclaration',
              start: 18,
              end: 39,
              loc: {
                start: { line: 2, column: 9 },
                end: { line: 2, column: 30 }
              },
              declarations: [
                {
                  type: 'VariableDeclarator',
                  start: 22,
                  end: 38,
                  loc: {
                    start: { line: 2, column: 13 },
                    end: { line: 2, column: 29 }
                  },
                  id: {
                    type: 'Identifier',
                    start: 22,
                    end: 29,
                    loc: {
                      start: { line: 2, column: 13 },
                      end: { line: 2, column: 20 }
                    },
                    name: 'parent1'
                  },
                  init: {
                    type: 'Literal',
                    start: 32,
                    end: 38,
                    loc: {
                      start: { line: 2, column: 23 },
                      end: { line: 2, column: 29 }
                    },
                    value: 'test',
                    raw: '"test"'
                  }
                }
              ],
              kind: 'let'
            },
            specifiers: [],
            source: null
          },
          {
            type: 'VariableDeclaration',
            start: 42,
            end: 64,
            loc: {
              start: { line: 3, column: 2 },
              end: { line: 3, column: 24 }
            },
            declarations: [
              {
                type: 'VariableDeclarator',
                start: 46,
                end: 63,
                loc: {
                  start: { line: 3, column: 6 },
                  end: { line: 3, column: 23 }
                },
                id: {
                  type: 'Identifier',
                  start: 46,
                  end: 53,
                  loc: {
                    start: { line: 3, column: 6 },
                    end: { line: 3, column: 13 }
                  },
                  name: 'parent2'
                },
                init: {
                  type: 'Literal',
                  start: 56,
                  end: 63,
                  loc: {
                    start: { line: 3, column: 16 },
                    end: { line: 3, column: 23 }
                  },
                  value: 'test2',
                  raw: '"test2"'
                }
              }
            ],
            kind: 'let'
          }
        ],
        sourceType: 'module'
      }
    },
    module: undefined
  },
  file: undefined,
  locate: [Function: locate],
  stylesheet: Stylesheet {
    children: [],
    keyframes: Map(0) {},
    nodes_with_css_class: Set(0) {},
    source: '<script>\n' +
      '  export let parent1 = "test";\n' +
      '  let parent2 = "test2";\n' +
      '</script>\n',
    ast: {
      html: { start: null, end: null, type: 'Fragment', children: [] },
      css: undefined,
      instance: {
        type: 'Script',
        start: 0,
        end: 74,
        context: 'default',
        content: Node {
          type: 'Program',
          start: 8,
          end: 65,
          loc: SourceLocation {
            start: Position { line: 1, column: 0 },
            end: Position { line: 4, column: 0 }
          },
          body: [
            Node {
              type: 'VariableDeclaration',
              start: 18,
              end: 39,
              loc: SourceLocation {
                start: Position { line: 2, column: 9 },
                end: Position { line: 2, column: 30 }
              },
              declarations: [
                Node {
                  type: 'VariableDeclarator',
                  start: 22,
                  end: 38,
                  loc: SourceLocation {
                    start: Position { line: 2, column: 13 },
                    end: Position { line: 2, column: 29 }
                  },
                  id: Node {
                    type: 'Identifier',
                    start: 22,
                    end: 29,
                    loc: SourceLocation {
                      start: Position { line: 2, column: 13 },
                      end: Position { line: 2, column: 20 }
                    },
                    name: 'parent1'
                  },
                  init: Node {
                    type: 'Literal',
                    start: 32,
                    end: 38,
                    loc: SourceLocation {
                      start: Position { line: 2, column: 23 },
                      end: Position { line: 2, column: 29 }
                    },
                    value: 'test',
                    raw: '"test"'
                  }
                }
              ],
              kind: 'let'
            }
          ],
          sourceType: 'module'
        }
      },
      module: undefined
    },
    filename: undefined,
    dev: undefined,
    has_styles: false
  },
  component_options: {
    immutable: false,
    accessors: false,
    preserveWhitespace: false,
    namespace: undefined
  },
  namespace: undefined,
  tag: 'MyComponent',
  ignores: undefined,
  instance_scope: Scope {
    parent: null,
    block: false,
    declarations: Map(2) {
      'parent1' => Node {
        type: 'VariableDeclaration',
        start: 18,
        end: 39,
        loc: SourceLocation {
          start: Position { line: 2, column: 9 },
          end: Position { line: 2, column: 30 }
        },
        declarations: [
          Node {
            type: 'VariableDeclarator',
            start: 22,
            end: 38,
            loc: SourceLocation {
              start: Position { line: 2, column: 13 },
              end: Position { line: 2, column: 29 }
            },
            id: Node {
              type: 'Identifier',
              start: 22,
              end: 29,
              loc: SourceLocation {
                start: Position { line: 2, column: 13 },
                end: Position { line: 2, column: 20 }
              },
              name: 'parent1'
            },
            init: Node {
              type: 'Literal',
              start: 32,
              end: 38,
              loc: SourceLocation {
                start: Position { line: 2, column: 23 },
                end: Position { line: 2, column: 29 }
              },
              value: 'test',
              raw: '"test"'
            }
          }
        ],
        kind: 'let'
      },
      'parent2' => Node {
        type: 'VariableDeclaration',
        start: 42,
        end: 64,
        loc: SourceLocation {
          start: Position { line: 3, column: 2 },
          end: Position { line: 3, column: 24 }
        },
        declarations: [
          Node {
            type: 'VariableDeclarator',
            start: 46,
            end: 63,
            loc: SourceLocation {
              start: Position { line: 3, column: 6 },
              end: Position { line: 3, column: 23 }
            },
            id: Node {
              type: 'Identifier',
              start: 46,
              end: 53,
              loc: SourceLocation {
                start: Position { line: 3, column: 6 },
                end: Position { line: 3, column: 13 }
              },
              name: 'parent2'
            },
            init: Node {
              type: 'Literal',
              start: 56,
              end: 63,
              loc: SourceLocation {
                start: Position { line: 3, column: 16 },
                end: Position { line: 3, column: 23 }
              },
              value: 'test2',
              raw: '"test2"'
            }
          }
        ],
        kind: 'let'
      }
    },
    initialised_declarations: Set(2) { 'parent1', 'parent2' },
    references: Set(2) { 'parent2', 'parent1' }
  },
  instance_scope_map: WeakMap { <items unknown> },
  fragment: Fragment {
    start: null,
    end: null,
    type: 'Fragment',
    scope: TemplateScope {
      owners: Map(0) {},
      parent: undefined,
      names: Set(0) {},
      dependencies_for_name: Map(0) {}
    },
    children: []
  }
}