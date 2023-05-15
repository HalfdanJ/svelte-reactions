Component {
  ignore_stack: [],
  vars: [
    {
      name: 'parent1',
      initialised: true,
      writable: true,
      imported: false,
      referenced_from_script: true,
      referenced: true,
      export_name: 'parent1',
      is_reactive_dependency: true
    },
    {
      name: 'parent2',
      initialised: true,
      writable: true,
      imported: false,
      referenced: true,
      hoistable: true
    },
    {
      name: 'var1',
      injected: true,
      writable: true,
      reassigned: true,
      initialised: true
    }
  ],
  var_lookup: Map(3) {
    'parent1' => {
      name: 'parent1',
      initialised: true,
      writable: true,
      imported: false,
      referenced_from_script: true,
      referenced: true,
      export_name: 'parent1',
      is_reactive_dependency: true
    },
    'parent2' => {
      name: 'parent2',
      initialised: true,
      writable: true,
      imported: false,
      referenced: true,
      hoistable: true
    },
    'var1' => {
      name: 'var1',
      injected: true,
      writable: true,
      reassigned: true,
      initialised: true
    }
  },
  imports: [],
  exports_from: [],
  instance_exports_from: [],
  hoistable_nodes: Set(1) {
    Node2 {
      type: 'VariableDeclaration',
      start: 42,
      end: 64,
      loc: SourceLocation2 {
        start: Position2 { line: 3, column: 2 },
        end: Position2 { line: 3, column: 24 }
      },
      declarations: [
        Node2 {
          type: 'VariableDeclarator',
          start: 46,
          end: 63,
          loc: SourceLocation2 {
            start: Position2 { line: 3, column: 6 },
            end: Position2 { line: 3, column: 23 }
          },
          id: Node2 {
            type: 'Identifier',
            start: 46,
            end: 53,
            loc: SourceLocation2 {
              start: Position2 { line: 3, column: 6 },
              end: Position2 { line: 3, column: 13 }
            },
            name: 'parent2'
          },
          init: Node2 {
            type: 'Literal',
            start: 56,
            end: 63,
            loc: SourceLocation2 {
              start: Position2 { line: 3, column: 16 },
              end: Position2 { line: 3, column: 23 }
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
    'parent1' => Node2 {
      type: 'VariableDeclaration',
      start: 18,
      end: 39,
      loc: SourceLocation2 {
        start: Position2 { line: 2, column: 9 },
        end: Position2 { line: 2, column: 30 }
      },
      declarations: [
        Node2 {
          type: 'VariableDeclarator',
          start: 22,
          end: 38,
          loc: SourceLocation2 {
            start: Position2 { line: 2, column: 13 },
            end: Position2 { line: 2, column: 29 }
          },
          id: Node2 {
            type: 'Identifier',
            start: 22,
            end: 29,
            loc: SourceLocation2 {
              start: Position2 { line: 2, column: 13 },
              end: Position2 { line: 2, column: 20 }
            },
            name: 'parent1'
          },
          init: Node2 {
            type: 'Literal',
            start: 32,
            end: 38,
            loc: SourceLocation2 {
              start: Position2 { line: 2, column: 23 },
              end: Position2 { line: 2, column: 29 }
            },
            value: 'test',
            raw: '"test"'
          }
        }
      ],
      kind: 'let'
    },
    'parent2' => Node2 {
      type: 'VariableDeclaration',
      start: 42,
      end: 64,
      loc: SourceLocation2 {
        start: Position2 { line: 3, column: 2 },
        end: Position2 { line: 3, column: 24 }
      },
      declarations: [
        Node2 {
          type: 'VariableDeclarator',
          start: 46,
          end: 63,
          loc: SourceLocation2 {
            start: Position2 { line: 3, column: 6 },
            end: Position2 { line: 3, column: 23 }
          },
          id: Node2 {
            type: 'Identifier',
            start: 46,
            end: 53,
            loc: SourceLocation2 {
              start: Position2 { line: 3, column: 6 },
              end: Position2 { line: 3, column: 13 }
            },
            name: 'parent2'
          },
          init: Node2 {
            type: 'Literal',
            start: 56,
            end: 63,
            loc: SourceLocation2 {
              start: Position2 { line: 3, column: 16 },
              end: Position2 { line: 3, column: 23 }
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
    Node2 {
      type: 'VariableDeclaration',
      start: 42,
      end: 64,
      loc: SourceLocation2 {
        start: Position2 { line: 3, column: 2 },
        end: Position2 { line: 3, column: 24 }
      },
      declarations: [
        Node2 {
          type: 'VariableDeclarator',
          start: 46,
          end: 63,
          loc: SourceLocation2 {
            start: Position2 { line: 3, column: 6 },
            end: Position2 { line: 3, column: 23 }
          },
          id: Node2 {
            type: 'Identifier',
            start: 46,
            end: 53,
            loc: SourceLocation2 {
              start: Position2 { line: 3, column: 6 },
              end: Position2 { line: 3, column: 13 }
            },
            name: 'parent2'
          },
          init: Node2 {
            type: 'Literal',
            start: 56,
            end: 63,
            loc: SourceLocation2 {
              start: Position2 { line: 3, column: 16 },
              end: Position2 { line: 3, column: 23 }
            },
            value: 'test2',
            raw: '"test2"'
          }
        }
      ],
      kind: 'let'
    }
  ],
  reactive_declarations: [
    {
      assignees: Set(1) { 'var1' },
      dependencies: Set(1) { 'parent1' },
      node: Node2 {
        type: 'LabeledStatement',
        start: 68,
        end: 86,
        loc: SourceLocation2 {
          start: Position2 { line: 5, column: 2 },
          end: Position2 { line: 5, column: 20 }
        },
        body: Node2 {
          type: 'ExpressionStatement',
          start: 71,
          end: 86,
          loc: SourceLocation2 {
            start: Position2 { line: 5, column: 5 },
            end: Position2 { line: 5, column: 20 }
          },
          expression: Node2 {
            type: 'AssignmentExpression',
            start: 71,
            end: 85,
            loc: SourceLocation2 {
              start: Position2 { line: 5, column: 5 },
              end: Position2 { line: 5, column: 19 }
            },
            operator: '=',
            left: Node2 {
              type: 'Identifier',
              start: 71,
              end: 75,
              loc: SourceLocation2 {
                start: Position2 { line: 5, column: 5 },
                end: Position2 { line: 5, column: 9 }
              },
              name: 'var1'
            },
            right: Node2 {
              type: 'Identifier',
              start: 78,
              end: 85,
              loc: SourceLocation2 {
                start: Position2 { line: 5, column: 12 },
                end: Position2 { line: 5, column: 19 }
              },
              name: 'parent1'
            }
          }
        },
        label: Node2 {
          type: 'Identifier',
          start: 68,
          end: 69,
          loc: SourceLocation2 {
            start: Position2 { line: 5, column: 2 },
            end: Position2 { line: 5, column: 3 }
          },
          name: '$'
        }
      },
      declaration: Node2 {
        type: 'Identifier',
        start: 71,
        end: 75,
        loc: SourceLocation2 {
          start: Position2 { line: 5, column: 5 },
          end: Position2 { line: 5, column: 9 }
        },
        name: 'var1'
      }
    }
  ],
  reactive_declaration_nodes: Set(1) {
    Node2 {
      type: 'LabeledStatement',
      start: 68,
      end: 86,
      loc: SourceLocation2 {
        start: Position2 { line: 5, column: 2 },
        end: Position2 { line: 5, column: 20 }
      },
      body: Node2 {
        type: 'ExpressionStatement',
        start: 71,
        end: 86,
        loc: SourceLocation2 {
          start: Position2 { line: 5, column: 5 },
          end: Position2 { line: 5, column: 20 }
        },
        expression: Node2 {
          type: 'AssignmentExpression',
          start: 71,
          end: 85,
          loc: SourceLocation2 {
            start: Position2 { line: 5, column: 5 },
            end: Position2 { line: 5, column: 19 }
          },
          operator: '=',
          left: Node2 {
            type: 'Identifier',
            start: 71,
            end: 75,
            loc: SourceLocation2 {
              start: Position2 { line: 5, column: 5 },
              end: Position2 { line: 5, column: 9 }
            },
            name: 'var1'
          },
          right: Node2 {
            type: 'Identifier',
            start: 78,
            end: 85,
            loc: SourceLocation2 {
              start: Position2 { line: 5, column: 12 },
              end: Position2 { line: 5, column: 19 }
            },
            name: 'parent1'
          }
        }
      },
      label: Node2 {
        type: 'Identifier',
        start: 68,
        end: 69,
        loc: SourceLocation2 {
          start: Position2 { line: 5, column: 2 },
          end: Position2 { line: 5, column: 3 }
        },
        name: '$'
      }
    }
  },
  has_reactive_assignments: false,
  injected_reactive_declaration_vars: Set(1) { 'var1' },
  helpers: Map(0) {},
  globals: Map(0) {},
  indirect_dependencies: Map(0) {},
  elements: [
    <ref *1> Element {
      start: 115,
      end: 157,
      type: 'Element',
      attributes: [],
      actions: [],
      bindings: [],
      classes: [],
      styles: [],
      handlers: [],
      lets: [],
      intro: null,
      outro: null,
      animation: null,
      name: 'span',
      tag_expr: Expression {
        type: 'Expression',
        references: Set(0) {},
        dependencies: Set(0) {},
        contextual_dependencies: Set(0) {},
        declarations: [],
        uses_context: false,
        node: { type: 'Literal', value: 'span' },
        template_scope: TemplateScope {
          owners: Map(0) {},
          parent: undefined,
          names: Set(0) {},
          dependencies_for_name: Map(0) {}
        },
        owner: [Circular *1],
        scope: Scope$1 {
          parent: null,
          block: false,
          declarations: Map(0) {},
          initialised_declarations: Set(0) {},
          references: Set(0) {}
        },
        scope_map: WeakMap { <items unknown> }
      },
      namespace: null,
      scope: TemplateScope {
        owners: Map(0) {},
        parent: undefined,
        names: Set(0) {},
        dependencies_for_name: Map(0) {}
      },
      children: [
        <ref *2> MustacheTag {
          start: 121,
          end: 150,
          type: 'MustacheTag',
          expression: Expression {
            type: 'Expression',
            references: Set(1) { 'parent2' },
            dependencies: Set(1) { 'parent2' },
            contextual_dependencies: Set(0) {},
            declarations: [],
            uses_context: false,
            node: Node2 {
              type: 'CallExpression',
              start: 122,
              end: 149,
              loc: SourceLocation2 {
                start: Position2 { line: 10, column: 13 },
                end: Position2 { line: 10, column: 40 }
              },
              callee: Node2 {
                type: 'MemberExpression',
                start: 122,
                end: 147,
                loc: SourceLocation2 {
                  start: Position2 { line: 10, column: 13 },
                  end: Position2 { line: 10, column: 38 }
                },
                object: Node2 {
                  type: 'Identifier',
                  start: 122,
                  end: 129,
                  loc: SourceLocation2 {
                    start: Position2 { line: 10, column: 13 },
                    end: Position2 { line: 10, column: 20 }
                  },
                  name: 'parent2'
                },
                property: Node2 {
                  type: 'Identifier',
                  start: 130,
                  end: 147,
                  loc: SourceLocation2 {
                    start: Position2 { line: 10, column: 21 },
                    end: Position2 { line: 10, column: 38 }
                  },
                  name: 'toLocaleLowerCase'
                },
                computed: false,
                optional: false
              },
              arguments: [],
              optional: false
            },
            template_scope: TemplateScope {
              owners: Map(0) {},
              parent: undefined,
              names: Set(0) {},
              dependencies_for_name: Map(0) {}
            },
            owner: [Circular *2],
            scope: Scope$1 {
              parent: null,
              block: false,
              declarations: Map(0) {},
              initialised_declarations: Set(0) {},
              references: Set(1) { 'parent2' }
            },
            scope_map: WeakMap { <items unknown> }
          },
          should_cache: true,
          prev: null
        }
      ],
      prev: null
    },
    <ref *3> Element {
      start: 109,
      end: 164,
      type: 'Element',
      attributes: [],
      actions: [],
      bindings: [],
      classes: [],
      styles: [],
      handlers: [],
      lets: [],
      intro: null,
      outro: null,
      animation: null,
      name: 'span',
      tag_expr: Expression {
        type: 'Expression',
        references: Set(0) {},
        dependencies: Set(0) {},
        contextual_dependencies: Set(0) {},
        declarations: [],
        uses_context: false,
        node: { type: 'Literal', value: 'span' },
        template_scope: TemplateScope {
          owners: Map(0) {},
          parent: undefined,
          names: Set(0) {},
          dependencies_for_name: Map(0) {}
        },
        owner: [Circular *3],
        scope: Scope$1 {
          parent: null,
          block: false,
          declarations: Map(0) {},
          initialised_declarations: Set(0) {},
          references: Set(0) {}
        },
        scope_map: WeakMap { <items unknown> }
      },
      namespace: null,
      scope: TemplateScope {
        owners: Map(0) {},
        parent: undefined,
        names: Set(0) {},
        dependencies_for_name: Map(0) {}
      },
      children: [
        <ref *1> Element {
          start: 115,
          end: 157,
          type: 'Element',
          attributes: [],
          actions: [],
          bindings: [],
          classes: [],
          styles: [],
          handlers: [],
          lets: [],
          intro: null,
          outro: null,
          animation: null,
          name: 'span',
          tag_expr: Expression {
            type: 'Expression',
            references: Set(0) {},
            dependencies: Set(0) {},
            contextual_dependencies: Set(0) {},
            declarations: [],
            uses_context: false,
            node: { type: 'Literal', value: 'span' },
            template_scope: TemplateScope {
              owners: Map(0) {},
              parent: undefined,
              names: Set(0) {},
              dependencies_for_name: Map(0) {}
            },
            owner: [Circular *1],
            scope: Scope$1 {
              parent: null,
              block: false,
              declarations: Map(0) {},
              initialised_declarations: Set(0) {},
              references: Set(0) {}
            },
            scope_map: WeakMap { <items unknown> }
          },
          namespace: null,
          scope: TemplateScope {
            owners: Map(0) {},
            parent: undefined,
            names: Set(0) {},
            dependencies_for_name: Map(0) {}
          },
          children: [
            <ref *2> MustacheTag {
              start: 121,
              end: 150,
              type: 'MustacheTag',
              expression: Expression {
                type: 'Expression',
                references: Set(1) { 'parent2' },
                dependencies: Set(1) { 'parent2' },
                contextual_dependencies: Set(0) {},
                declarations: [],
                uses_context: false,
                node: Node2 {
                  type: 'CallExpression',
                  start: 122,
                  end: 149,
                  loc: SourceLocation2 {
                    start: Position2 { line: 10, column: 13 },
                    end: Position2 { line: 10, column: 40 }
                  },
                  callee: Node2 {
                    type: 'MemberExpression',
                    start: 122,
                    end: 147,
                    loc: SourceLocation2 {
                      start: Position2 { line: 10, column: 13 },
                      end: Position2 { line: 10, column: 38 }
                    },
                    object: Node2 {
                      type: 'Identifier',
                      start: 122,
                      end: 129,
                      loc: SourceLocation2 {
                        start: Position2 { line: 10, column: 13 },
                        end: Position2 { line: 10, column: 20 }
                      },
                      name: 'parent2'
                    },
                    property: Node2 {
                      type: 'Identifier',
                      start: 130,
                      end: 147,
                      loc: SourceLocation2 {
                        start: Position2 { line: 10, column: 21 },
                        end: Position2 { line: 10, column: 38 }
                      },
                      name: 'toLocaleLowerCase'
                    },
                    computed: false,
                    optional: false
                  },
                  arguments: [],
                  optional: false
                },
                template_scope: TemplateScope {
                  owners: Map(0) {},
                  parent: undefined,
                  names: Set(0) {},
                  dependencies_for_name: Map(0) {}
                },
                owner: [Circular *2],
                scope: Scope$1 {
                  parent: null,
                  block: false,
                  declarations: Map(0) {},
                  initialised_declarations: Set(0) {},
                  references: Set(1) { 'parent2' }
                },
                scope_map: WeakMap { <items unknown> }
              },
              should_cache: true,
              prev: null
            }
          ],
          prev: null
        }
      ],
      prev: <ref *5> Text {
        start: 107,
        end: 109,
        type: 'Text',
        data: '\n\n',
        synthetic: false,
        prev: <ref *4> MustacheTag {
          start: 98,
          end: 107,
          type: 'MustacheTag',
          expression: Expression {
            type: 'Expression',
            references: Set(1) { 'parent1' },
            dependencies: Set(1) { 'parent1' },
            contextual_dependencies: Set(0) {},
            declarations: [],
            uses_context: false,
            node: Node2 {
              type: 'Identifier',
              start: 99,
              end: 106,
              loc: SourceLocation2 {
                start: Position2 { line: 8, column: 1 },
                end: Position2 { line: 8, column: 8 }
              },
              name: 'parent1'
            },
            template_scope: TemplateScope {
              owners: Map(0) {},
              parent: undefined,
              names: Set(0) {},
              dependencies_for_name: Map(0) {}
            },
            owner: [Circular *4],
            scope: Scope$1 {
              parent: null,
              block: false,
              declarations: Map(0) {},
              initialised_declarations: Set(0) {},
              references: Set(0) {}
            },
            scope_map: WeakMap { <items unknown> }
          },
          should_cache: false,
          prev: Text {
            start: 96,
            end: 98,
            type: 'Text',
            data: '\n\n',
            synthetic: false,
            prev: null,
            next: [Circular *4]
          },
          next: [Circular *5]
        },
        next: [Circular *3]
      }
    }
  ],
  aliases: Map(0) {},
  used_names: Set(1) { '' },
  globally_used_names: Set(0) {},
  slots: Map(0) {},
  slot_outlets: Set(0) {},
  name: { type: 'Identifier', name: '' },
  stats: {},
  warnings: [],
  ast: {
    html: {
      start: 98,
      end: 164,
      type: 'Fragment',
      children: [
        { start: 96, end: 98, type: 'Text', raw: '\n\n', data: '\n\n' },
        {
          start: 98,
          end: 107,
          type: 'MustacheTag',
          expression: Node2 {
            type: 'Identifier',
            start: 99,
            end: 106,
            loc: SourceLocation2 {
              start: Position2 { line: 8, column: 1 },
              end: Position2 { line: 8, column: 8 }
            },
            name: 'parent1'
          }
        },
        {
          start: 107,
          end: 109,
          type: 'Text',
          raw: '\n\n',
          data: '\n\n'
        },
        {
          start: 109,
          end: 164,
          type: 'Element',
          name: 'span',
          attributes: [],
          children: [
            {
              start: 115,
              end: 157,
              type: 'Element',
              name: 'span',
              attributes: [],
              children: [
                {
                  start: 121,
                  end: 150,
                  type: 'MustacheTag',
                  expression: Node2 {
                    type: 'CallExpression',
                    start: 122,
                    end: 149,
                    loc: SourceLocation2 {
                      start: Position2 { line: 10, column: 13 },
                      end: Position2 { line: 10, column: 40 }
                    },
                    callee: Node2 {
                      type: 'MemberExpression',
                      start: 122,
                      end: 147,
                      loc: SourceLocation2 {
                        start: Position2 { line: 10, column: 13 },
                        end: Position2 { line: 10, column: 38 }
                      },
                      object: Node2 {
                        type: 'Identifier',
                        start: 122,
                        end: 129,
                        loc: SourceLocation2 {
                          start: Position2 { line: 10, column: 13 },
                          end: Position2 { line: 10, column: 20 }
                        },
                        name: 'parent2'
                      },
                      property: Node2 {
                        type: 'Identifier',
                        start: 130,
                        end: 147,
                        loc: SourceLocation2 {
                          start: Position2 { line: 10, column: 21 },
                          end: Position2 { line: 10, column: 38 }
                        },
                        name: 'toLocaleLowerCase'
                      },
                      computed: false,
                      optional: false
                    },
                    arguments: [],
                    optional: false
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    css: undefined,
    instance: {
      type: 'Script',
      start: 0,
      end: 96,
      context: 'default',
      content: Node2 {
        type: 'Program',
        start: 8,
        end: 87,
        loc: SourceLocation2 {
          start: Position2 { line: 1, column: 0 },
          end: Position2 { line: 6, column: 0 }
        },
        body: [
          Node2 {
            type: 'VariableDeclaration',
            start: 18,
            end: 39,
            loc: SourceLocation2 {
              start: Position2 { line: 2, column: 9 },
              end: Position2 { line: 2, column: 30 }
            },
            declarations: [
              Node2 {
                type: 'VariableDeclarator',
                start: 22,
                end: 38,
                loc: SourceLocation2 {
                  start: Position2 { line: 2, column: 13 },
                  end: Position2 { line: 2, column: 29 }
                },
                id: Node2 {
                  type: 'Identifier',
                  start: 22,
                  end: 29,
                  loc: SourceLocation2 {
                    start: Position2 { line: 2, column: 13 },
                    end: Position2 { line: 2, column: 20 }
                  },
                  name: 'parent1'
                },
                init: Node2 {
                  type: 'Literal',
                  start: 32,
                  end: 38,
                  loc: SourceLocation2 {
                    start: Position2 { line: 2, column: 23 },
                    end: Position2 { line: 2, column: 29 }
                  },
                  value: 'test',
                  raw: '"test"'
                }
              }
            ],
            kind: 'let'
          },
          Node2 {
            type: 'LabeledStatement',
            start: 68,
            end: 86,
            loc: SourceLocation2 {
              start: Position2 { line: 5, column: 2 },
              end: Position2 { line: 5, column: 20 }
            },
            body: Node2 {
              type: 'ExpressionStatement',
              start: 71,
              end: 86,
              loc: SourceLocation2 {
                start: Position2 { line: 5, column: 5 },
                end: Position2 { line: 5, column: 20 }
              },
              expression: Node2 {
                type: 'AssignmentExpression',
                start: 71,
                end: 85,
                loc: SourceLocation2 {
                  start: Position2 { line: 5, column: 5 },
                  end: Position2 { line: 5, column: 19 }
                },
                operator: '=',
                left: Node2 {
                  type: 'Identifier',
                  start: 71,
                  end: 75,
                  loc: SourceLocation2 {
                    start: Position2 { line: 5, column: 5 },
                    end: Position2 { line: 5, column: 9 }
                  },
                  name: 'var1'
                },
                right: Node2 {
                  type: 'Identifier',
                  start: 78,
                  end: 85,
                  loc: SourceLocation2 {
                    start: Position2 { line: 5, column: 12 },
                    end: Position2 { line: 5, column: 19 }
                  },
                  name: 'parent1'
                }
              }
            },
            label: Node2 {
              type: 'Identifier',
              start: 68,
              end: 69,
              loc: SourceLocation2 {
                start: Position2 { line: 5, column: 2 },
                end: Position2 { line: 5, column: 3 }
              },
              name: '$'
            }
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
    '\n' +
    '  $: var1 = parent1;\n' +
    '</script>\n' +
    '\n' +
    '{parent1}\n' +
    '\n' +
    '<span><span>{parent2.toLocaleLowerCase()}</span></span>\n',
  compile_options: {},
  original_ast: {
    html: {
      start: 98,
      end: 164,
      type: 'Fragment',
      children: [
        { start: 96, end: 98, type: 'Text', raw: '\n\n', data: '\n\n' },
        {
          start: 98,
          end: 107,
          type: 'MustacheTag',
          expression: {
            type: 'Identifier',
            start: 99,
            end: 106,
            loc: {
              start: { line: 8, column: 1 },
              end: { line: 8, column: 8 }
            },
            name: 'parent1'
          }
        },
        {
          start: 107,
          end: 109,
          type: 'Text',
          raw: '\n\n',
          data: '\n\n'
        },
        {
          start: 109,
          end: 164,
          type: 'Element',
          name: 'span',
          attributes: [],
          children: [
            {
              start: 115,
              end: 157,
              type: 'Element',
              name: 'span',
              attributes: [],
              children: [
                {
                  start: 121,
                  end: 150,
                  type: 'MustacheTag',
                  expression: {
                    type: 'CallExpression',
                    start: 122,
                    end: 149,
                    loc: {
                      start: { line: 10, column: 13 },
                      end: { line: 10, column: 40 }
                    },
                    callee: {
                      type: 'MemberExpression',
                      start: 122,
                      end: 147,
                      loc: {
                        start: { line: 10, column: 13 },
                        end: { line: 10, column: 38 }
                      },
                      object: {
                        type: 'Identifier',
                        start: 122,
                        end: 129,
                        loc: {
                          start: { line: 10, column: 13 },
                          end: { line: 10, column: 20 }
                        },
                        name: 'parent2'
                      },
                      property: {
                        type: 'Identifier',
                        start: 130,
                        end: 147,
                        loc: {
                          start: { line: 10, column: 21 },
                          end: { line: 10, column: 38 }
                        },
                        name: 'toLocaleLowerCase'
                      },
                      computed: false,
                      optional: false
                    },
                    arguments: [],
                    optional: false
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    css: undefined,
    instance: {
      type: 'Script',
      start: 0,
      end: 96,
      context: 'default',
      content: {
        type: 'Program',
        start: 8,
        end: 87,
        loc: { start: { line: 1, column: 0 }, end: { line: 6, column: 0 } },
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
          },
          {
            type: 'LabeledStatement',
            start: 68,
            end: 86,
            loc: {
              start: { line: 5, column: 2 },
              end: { line: 5, column: 20 }
            },
            body: {
              type: 'ExpressionStatement',
              start: 71,
              end: 86,
              loc: {
                start: { line: 5, column: 5 },
                end: { line: 5, column: 20 }
              },
              expression: {
                type: 'AssignmentExpression',
                start: 71,
                end: 85,
                loc: {
                  start: { line: 5, column: 5 },
                  end: { line: 5, column: 19 }
                },
                operator: '=',
                left: {
                  type: 'Identifier',
                  start: 71,
                  end: 75,
                  loc: {
                    start: { line: 5, column: 5 },
                    end: { line: 5, column: 9 }
                  },
                  name: 'var1'
                },
                right: {
                  type: 'Identifier',
                  start: 78,
                  end: 85,
                  loc: {
                    start: { line: 5, column: 12 },
                    end: { line: 5, column: 19 }
                  },
                  name: 'parent1'
                }
              }
            },
            label: {
              type: 'Identifier',
              start: 68,
              end: 69,
              loc: {
                start: { line: 5, column: 2 },
                end: { line: 5, column: 3 }
              },
              name: '$'
            }
          }
        ],
        sourceType: 'module'
      }
    },
    module: undefined
  },
  file: undefined,
  locate: [Function: locate2],
  stylesheet: Stylesheet {
    children: [],
    keyframes: Map(0) {},
    nodes_with_css_class: Set(0) {},
    source: '<script>\n' +
      '  export let parent1 = "test";\n' +
      '  let parent2 = "test2";\n' +
      '\n' +
      '  $: var1 = parent1;\n' +
      '</script>\n' +
      '\n' +
      '{parent1}\n' +
      '\n' +
      '<span><span>{parent2.toLocaleLowerCase()}</span></span>\n',
    ast: {
      html: {
        start: 98,
        end: 164,
        type: 'Fragment',
        children: [
          {
            start: 96,
            end: 98,
            type: 'Text',
            raw: '\n\n',
            data: '\n\n'
          },
          {
            start: 98,
            end: 107,
            type: 'MustacheTag',
            expression: Node2 {
              type: 'Identifier',
              start: 99,
              end: 106,
              loc: SourceLocation2 {
                start: Position2 { line: 8, column: 1 },
                end: Position2 { line: 8, column: 8 }
              },
              name: 'parent1'
            }
          },
          {
            start: 107,
            end: 109,
            type: 'Text',
            raw: '\n\n',
            data: '\n\n'
          },
          {
            start: 109,
            end: 164,
            type: 'Element',
            name: 'span',
            attributes: [],
            children: [
              {
                start: 115,
                end: 157,
                type: 'Element',
                name: 'span',
                attributes: [],
                children: [
                  {
                    start: 121,
                    end: 150,
                    type: 'MustacheTag',
                    expression: Node2 {
                      type: 'CallExpression',
                      start: 122,
                      end: 149,
                      loc: SourceLocation2 {
                        start: Position2 { line: 10, column: 13 },
                        end: Position2 { line: 10, column: 40 }
                      },
                      callee: Node2 {
                        type: 'MemberExpression',
                        start: 122,
                        end: 147,
                        loc: SourceLocation2 {
                          start: Position2 { line: 10, column: 13 },
                          end: Position2 { line: 10, column: 38 }
                        },
                        object: Node2 {
                          type: 'Identifier',
                          start: 122,
                          end: 129,
                          loc: SourceLocation2 {
                            start: Position2 { line: 10, column: 13 },
                            end: Position2 { line: 10, column: 20 }
                          },
                          name: 'parent2'
                        },
                        property: Node2 {
                          type: 'Identifier',
                          start: 130,
                          end: 147,
                          loc: SourceLocation2 {
                            start: Position2 { line: 10, column: 21 },
                            end: Position2 { line: 10, column: 38 }
                          },
                          name: 'toLocaleLowerCase'
                        },
                        computed: false,
                        optional: false
                      },
                      arguments: [],
                      optional: false
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      css: undefined,
      instance: {
        type: 'Script',
        start: 0,
        end: 96,
        context: 'default',
        content: Node2 {
          type: 'Program',
          start: 8,
          end: 87,
          loc: SourceLocation2 {
            start: Position2 { line: 1, column: 0 },
            end: Position2 { line: 6, column: 0 }
          },
          body: [
            Node2 {
              type: 'VariableDeclaration',
              start: 18,
              end: 39,
              loc: SourceLocation2 {
                start: Position2 { line: 2, column: 9 },
                end: Position2 { line: 2, column: 30 }
              },
              declarations: [
                Node2 {
                  type: 'VariableDeclarator',
                  start: 22,
                  end: 38,
                  loc: SourceLocation2 {
                    start: Position2 { line: 2, column: 13 },
                    end: Position2 { line: 2, column: 29 }
                  },
                  id: Node2 {
                    type: 'Identifier',
                    start: 22,
                    end: 29,
                    loc: SourceLocation2 {
                      start: Position2 { line: 2, column: 13 },
                      end: Position2 { line: 2, column: 20 }
                    },
                    name: 'parent1'
                  },
                  init: Node2 {
                    type: 'Literal',
                    start: 32,
                    end: 38,
                    loc: SourceLocation2 {
                      start: Position2 { line: 2, column: 23 },
                      end: Position2 { line: 2, column: 29 }
                    },
                    value: 'test',
                    raw: '"test"'
                  }
                }
              ],
              kind: 'let'
            },
            Node2 {
              type: 'LabeledStatement',
              start: 68,
              end: 86,
              loc: SourceLocation2 {
                start: Position2 { line: 5, column: 2 },
                end: Position2 { line: 5, column: 20 }
              },
              body: Node2 {
                type: 'ExpressionStatement',
                start: 71,
                end: 86,
                loc: SourceLocation2 {
                  start: Position2 { line: 5, column: 5 },
                  end: Position2 { line: 5, column: 20 }
                },
                expression: Node2 {
                  type: 'AssignmentExpression',
                  start: 71,
                  end: 85,
                  loc: SourceLocation2 {
                    start: Position2 { line: 5, column: 5 },
                    end: Position2 { line: 5, column: 19 }
                  },
                  operator: '=',
                  left: Node2 {
                    type: 'Identifier',
                    start: 71,
                    end: 75,
                    loc: SourceLocation2 {
                      start: Position2 { line: 5, column: 5 },
                      end: Position2 { line: 5, column: 9 }
                    },
                    name: 'var1'
                  },
                  right: Node2 {
                    type: 'Identifier',
                    start: 78,
                    end: 85,
                    loc: SourceLocation2 {
                      start: Position2 { line: 5, column: 12 },
                      end: Position2 { line: 5, column: 19 }
                    },
                    name: 'parent1'
                  }
                }
              },
              label: Node2 {
                type: 'Identifier',
                start: 68,
                end: 69,
                loc: SourceLocation2 {
                  start: Position2 { line: 5, column: 2 },
                  end: Position2 { line: 5, column: 3 }
                },
                name: '$'
              }
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
  tag: '',
  ignores: undefined,
  instance_scope: Scope$1 {
    parent: null,
    block: false,
    declarations: Map(2) {
      'parent1' => Node2 {
        type: 'VariableDeclaration',
        start: 18,
        end: 39,
        loc: SourceLocation2 {
          start: Position2 { line: 2, column: 9 },
          end: Position2 { line: 2, column: 30 }
        },
        declarations: [
          Node2 {
            type: 'VariableDeclarator',
            start: 22,
            end: 38,
            loc: SourceLocation2 {
              start: Position2 { line: 2, column: 13 },
              end: Position2 { line: 2, column: 29 }
            },
            id: Node2 {
              type: 'Identifier',
              start: 22,
              end: 29,
              loc: SourceLocation2 {
                start: Position2 { line: 2, column: 13 },
                end: Position2 { line: 2, column: 20 }
              },
              name: 'parent1'
            },
            init: Node2 {
              type: 'Literal',
              start: 32,
              end: 38,
              loc: SourceLocation2 {
                start: Position2 { line: 2, column: 23 },
                end: Position2 { line: 2, column: 29 }
              },
              value: 'test',
              raw: '"test"'
            }
          }
        ],
        kind: 'let'
      },
      'parent2' => Node2 {
        type: 'VariableDeclaration',
        start: 42,
        end: 64,
        loc: SourceLocation2 {
          start: Position2 { line: 3, column: 2 },
          end: Position2 { line: 3, column: 24 }
        },
        declarations: [
          Node2 {
            type: 'VariableDeclarator',
            start: 46,
            end: 63,
            loc: SourceLocation2 {
              start: Position2 { line: 3, column: 6 },
              end: Position2 { line: 3, column: 23 }
            },
            id: Node2 {
              type: 'Identifier',
              start: 46,
              end: 53,
              loc: SourceLocation2 {
                start: Position2 { line: 3, column: 6 },
                end: Position2 { line: 3, column: 13 }
              },
              name: 'parent2'
            },
            init: Node2 {
              type: 'Literal',
              start: 56,
              end: 63,
              loc: SourceLocation2 {
                start: Position2 { line: 3, column: 16 },
                end: Position2 { line: 3, column: 23 }
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
    references: Set(3) { 'parent1', 'var1', 'parent2' }
  },
  instance_scope_map: WeakMap { <items unknown> },
  fragment: Fragment {
    start: 98,
    end: 164,
    type: 'Fragment',
    scope: TemplateScope {
      owners: Map(0) {},
      parent: undefined,
      names: Set(0) {},
      dependencies_for_name: Map(0) {}
    },
    children: [
      <ref *6> Text {
        start: 96,
        end: 98,
        type: 'Text',
        data: '\n\n',
        synthetic: false,
        prev: null,
        next: <ref *4> MustacheTag {
          start: 98,
          end: 107,
          type: 'MustacheTag',
          expression: Expression {
            type: 'Expression',
            references: Set(1) { 'parent1' },
            dependencies: Set(1) { 'parent1' },
            contextual_dependencies: Set(0) {},
            declarations: [],
            uses_context: false,
            node: Node2 {
              type: 'Identifier',
              start: 99,
              end: 106,
              loc: SourceLocation2 {
                start: Position2 { line: 8, column: 1 },
                end: Position2 { line: 8, column: 8 }
              },
              name: 'parent1'
            },
            template_scope: TemplateScope {
              owners: Map(0) {},
              parent: undefined,
              names: Set(0) {},
              dependencies_for_name: Map(0) {}
            },
            owner: [Circular *4],
            scope: Scope$1 {
              parent: null,
              block: false,
              declarations: Map(0) {},
              initialised_declarations: Set(0) {},
              references: Set(0) {}
            },
            scope_map: WeakMap { <items unknown> }
          },
          should_cache: false,
          prev: [Circular *6],
          next: <ref *5> Text {
            start: 107,
            end: 109,
            type: 'Text',
            data: '\n\n',
            synthetic: false,
            prev: [Circular *4],
            next: <ref *3> Element {
              start: 109,
              end: 164,
              type: 'Element',
              attributes: [],
              actions: [],
              bindings: [],
              classes: [],
              styles: [],
              handlers: [],
              lets: [],
              intro: null,
              outro: null,
              animation: null,
              name: 'span',
              tag_expr: Expression {
                type: 'Expression',
                references: Set(0) {},
                dependencies: Set(0) {},
                contextual_dependencies: Set(0) {},
                declarations: [],
                uses_context: false,
                node: { type: 'Literal', value: 'span' },
                template_scope: TemplateScope {
                  owners: Map(0) {},
                  parent: undefined,
                  names: Set(0) {},
                  dependencies_for_name: Map(0) {}
                },
                owner: [Circular *3],
                scope: Scope$1 {
                  parent: null,
                  block: false,
                  declarations: Map(0) {},
                  initialised_declarations: Set(0) {},
                  references: Set(0) {}
                },
                scope_map: WeakMap { <items unknown> }
              },
              namespace: null,
              scope: TemplateScope {
                owners: Map(0) {},
                parent: undefined,
                names: Set(0) {},
                dependencies_for_name: Map(0) {}
              },
              children: [
                <ref *1> Element {
                  start: 115,
                  end: 157,
                  type: 'Element',
                  attributes: [],
                  actions: [],
                  bindings: [],
                  classes: [],
                  styles: [],
                  handlers: [],
                  lets: [],
                  intro: null,
                  outro: null,
                  animation: null,
                  name: 'span',
                  tag_expr: Expression {
                    type: 'Expression',
                    references: Set(0) {},
                    dependencies: Set(0) {},
                    contextual_dependencies: Set(0) {},
                    declarations: [],
                    uses_context: false,
                    node: { type: 'Literal', value: 'span' },
                    template_scope: TemplateScope {
                      owners: Map(0) {},
                      parent: undefined,
                      names: Set(0) {},
                      dependencies_for_name: Map(0) {}
                    },
                    owner: [Circular *1],
                    scope: Scope$1 {
                      parent: null,
                      block: false,
                      declarations: Map(0) {},
                      initialised_declarations: Set(0) {},
                      references: Set(0) {}
                    },
                    scope_map: WeakMap { <items unknown> }
                  },
                  namespace: null,
                  scope: TemplateScope {
                    owners: Map(0) {},
                    parent: undefined,
                    names: Set(0) {},
                    dependencies_for_name: Map(0) {}
                  },
                  children: [
                    <ref *2> MustacheTag {
                      start: 121,
                      end: 150,
                      type: 'MustacheTag',
                      expression: Expression {
                        type: 'Expression',
                        references: Set(1) { 'parent2' },
                        dependencies: Set(1) { 'parent2' },
                        contextual_dependencies: Set(0) {},
                        declarations: [],
                        uses_context: false,
                        node: Node2 {
                          type: 'CallExpression',
                          start: 122,
                          end: 149,
                          loc: SourceLocation2 {
                            start: Position2 { line: 10, column: 13 },
                            end: Position2 { line: 10, column: 40 }
                          },
                          callee: Node2 {
                            type: 'MemberExpression',
                            start: 122,
                            end: 147,
                            loc: SourceLocation2 {
                              start: Position2 { line: 10, column: 13 },
                              end: Position2 { line: 10, column: 38 }
                            },
                            object: Node2 {
                              type: 'Identifier',
                              start: 122,
                              end: 129,
                              loc: SourceLocation2 {
                                start: Position2 { line: 10, column: 13 },
                                end: Position2 { line: 10, column: 20 }
                              },
                              name: 'parent2'
                            },
                            property: Node2 {
                              type: 'Identifier',
                              start: 130,
                              end: 147,
                              loc: SourceLocation2 {
                                start: Position2 { line: 10, column: 21 },
                                end: Position2 { line: 10, column: 38 }
                              },
                              name: 'toLocaleLowerCase'
                            },
                            computed: false,
                            optional: false
                          },
                          arguments: [],
                          optional: false
                        },
                        template_scope: TemplateScope {
                          owners: Map(0) {},
                          parent: undefined,
                          names: Set(0) {},
                          dependencies_for_name: Map(0) {}
                        },
                        owner: [Circular *2],
                        scope: Scope$1 {
                          parent: null,
                          block: false,
                          declarations: Map(0) {},
                          initialised_declarations: Set(0) {},
                          references: Set(1) { 'parent2' }
                        },
                        scope_map: WeakMap { <items unknown> }
                      },
                      should_cache: true,
                      prev: null
                    }
                  ],
                  prev: null
                }
              ],
              prev: [Circular *5]
            }
          }
        }
      },
      <ref *4> MustacheTag {
        start: 98,
        end: 107,
        type: 'MustacheTag',
        expression: Expression {
          type: 'Expression',
          references: Set(1) { 'parent1' },
          dependencies: Set(1) { 'parent1' },
          contextual_dependencies: Set(0) {},
          declarations: [],
          uses_context: false,
          node: Node2 {
            type: 'Identifier',
            start: 99,
            end: 106,
            loc: SourceLocation2 {
              start: Position2 { line: 8, column: 1 },
              end: Position2 { line: 8, column: 8 }
            },
            name: 'parent1'
          },
          template_scope: TemplateScope {
            owners: Map(0) {},
            parent: undefined,
            names: Set(0) {},
            dependencies_for_name: Map(0) {}
          },
          owner: [Circular *4],
          scope: Scope$1 {
            parent: null,
            block: false,
            declarations: Map(0) {},
            initialised_declarations: Set(0) {},
            references: Set(0) {}
          },
          scope_map: WeakMap { <items unknown> }
        },
        should_cache: false,
        prev: <ref *6> Text {
          start: 96,
          end: 98,
          type: 'Text',
          data: '\n\n',
          synthetic: false,
          prev: null,
          next: [Circular *4]
        },
        next: <ref *5> Text {
          start: 107,
          end: 109,
          type: 'Text',
          data: '\n\n',
          synthetic: false,
          prev: [Circular *4],
          next: <ref *3> Element {
            start: 109,
            end: 164,
            type: 'Element',
            attributes: [],
            actions: [],
            bindings: [],
            classes: [],
            styles: [],
            handlers: [],
            lets: [],
            intro: null,
            outro: null,
            animation: null,
            name: 'span',
            tag_expr: Expression {
              type: 'Expression',
              references: Set(0) {},
              dependencies: Set(0) {},
              contextual_dependencies: Set(0) {},
              declarations: [],
              uses_context: false,
              node: { type: 'Literal', value: 'span' },
              template_scope: TemplateScope {
                owners: Map(0) {},
                parent: undefined,
                names: Set(0) {},
                dependencies_for_name: Map(0) {}
              },
              owner: [Circular *3],
              scope: Scope$1 {
                parent: null,
                block: false,
                declarations: Map(0) {},
                initialised_declarations: Set(0) {},
                references: Set(0) {}
              },
              scope_map: WeakMap { <items unknown> }
            },
            namespace: null,
            scope: TemplateScope {
              owners: Map(0) {},
              parent: undefined,
              names: Set(0) {},
              dependencies_for_name: Map(0) {}
            },
            children: [
              <ref *1> Element {
                start: 115,
                end: 157,
                type: 'Element',
                attributes: [],
                actions: [],
                bindings: [],
                classes: [],
                styles: [],
                handlers: [],
                lets: [],
                intro: null,
                outro: null,
                animation: null,
                name: 'span',
                tag_expr: Expression {
                  type: 'Expression',
                  references: Set(0) {},
                  dependencies: Set(0) {},
                  contextual_dependencies: Set(0) {},
                  declarations: [],
                  uses_context: false,
                  node: { type: 'Literal', value: 'span' },
                  template_scope: TemplateScope {
                    owners: Map(0) {},
                    parent: undefined,
                    names: Set(0) {},
                    dependencies_for_name: Map(0) {}
                  },
                  owner: [Circular *1],
                  scope: Scope$1 {
                    parent: null,
                    block: false,
                    declarations: Map(0) {},
                    initialised_declarations: Set(0) {},
                    references: Set(0) {}
                  },
                  scope_map: WeakMap { <items unknown> }
                },
                namespace: null,
                scope: TemplateScope {
                  owners: Map(0) {},
                  parent: undefined,
                  names: Set(0) {},
                  dependencies_for_name: Map(0) {}
                },
                children: [
                  <ref *2> MustacheTag {
                    start: 121,
                    end: 150,
                    type: 'MustacheTag',
                    expression: Expression {
                      type: 'Expression',
                      references: Set(1) { 'parent2' },
                      dependencies: Set(1) { 'parent2' },
                      contextual_dependencies: Set(0) {},
                      declarations: [],
                      uses_context: false,
                      node: Node2 {
                        type: 'CallExpression',
                        start: 122,
                        end: 149,
                        loc: SourceLocation2 {
                          start: Position2 { line: 10, column: 13 },
                          end: Position2 { line: 10, column: 40 }
                        },
                        callee: Node2 {
                          type: 'MemberExpression',
                          start: 122,
                          end: 147,
                          loc: SourceLocation2 {
                            start: Position2 { line: 10, column: 13 },
                            end: Position2 { line: 10, column: 38 }
                          },
                          object: Node2 {
                            type: 'Identifier',
                            start: 122,
                            end: 129,
                            loc: SourceLocation2 {
                              start: Position2 { line: 10, column: 13 },
                              end: Position2 { line: 10, column: 20 }
                            },
                            name: 'parent2'
                          },
                          property: Node2 {
                            type: 'Identifier',
                            start: 130,
                            end: 147,
                            loc: SourceLocation2 {
                              start: Position2 { line: 10, column: 21 },
                              end: Position2 { line: 10, column: 38 }
                            },
                            name: 'toLocaleLowerCase'
                          },
                          computed: false,
                          optional: false
                        },
                        arguments: [],
                        optional: false
                      },
                      template_scope: TemplateScope {
                        owners: Map(0) {},
                        parent: undefined,
                        names: Set(0) {},
                        dependencies_for_name: Map(0) {}
                      },
                      owner: [Circular *2],
                      scope: Scope$1 {
                        parent: null,
                        block: false,
                        declarations: Map(0) {},
                        initialised_declarations: Set(0) {},
                        references: Set(1) { 'parent2' }
                      },
                      scope_map: WeakMap { <items unknown> }
                    },
                    should_cache: true,
                    prev: null
                  }
                ],
                prev: null
              }
            ],
            prev: [Circular *5]
          }
        }
      },
      <ref *5> Text {
        start: 107,
        end: 109,
        type: 'Text',
        data: '\n\n',
        synthetic: false,
        prev: <ref *4> MustacheTag {
          start: 98,
          end: 107,
          type: 'MustacheTag',
          expression: Expression {
            type: 'Expression',
            references: Set(1) { 'parent1' },
            dependencies: Set(1) { 'parent1' },
            contextual_dependencies: Set(0) {},
            declarations: [],
            uses_context: false,
            node: Node2 {
              type: 'Identifier',
              start: 99,
              end: 106,
              loc: SourceLocation2 {
                start: Position2 { line: 8, column: 1 },
                end: Position2 { line: 8, column: 8 }
              },
              name: 'parent1'
            },
            template_scope: TemplateScope {
              owners: Map(0) {},
              parent: undefined,
              names: Set(0) {},
              dependencies_for_name: Map(0) {}
            },
            owner: [Circular *4],
            scope: Scope$1 {
              parent: null,
              block: false,
              declarations: Map(0) {},
              initialised_declarations: Set(0) {},
              references: Set(0) {}
            },
            scope_map: WeakMap { <items unknown> }
          },
          should_cache: false,
          prev: <ref *6> Text {
            start: 96,
            end: 98,
            type: 'Text',
            data: '\n\n',
            synthetic: false,
            prev: null,
            next: [Circular *4]
          },
          next: [Circular *5]
        },
        next: <ref *3> Element {
          start: 109,
          end: 164,
          type: 'Element',
          attributes: [],
          actions: [],
          bindings: [],
          classes: [],
          styles: [],
          handlers: [],
          lets: [],
          intro: null,
          outro: null,
          animation: null,
          name: 'span',
          tag_expr: Expression {
            type: 'Expression',
            references: Set(0) {},
            dependencies: Set(0) {},
            contextual_dependencies: Set(0) {},
            declarations: [],
            uses_context: false,
            node: { type: 'Literal', value: 'span' },
            template_scope: TemplateScope {
              owners: Map(0) {},
              parent: undefined,
              names: Set(0) {},
              dependencies_for_name: Map(0) {}
            },
            owner: [Circular *3],
            scope: Scope$1 {
              parent: null,
              block: false,
              declarations: Map(0) {},
              initialised_declarations: Set(0) {},
              references: Set(0) {}
            },
            scope_map: WeakMap { <items unknown> }
          },
          namespace: null,
          scope: TemplateScope {
            owners: Map(0) {},
            parent: undefined,
            names: Set(0) {},
            dependencies_for_name: Map(0) {}
          },
          children: [
            <ref *1> Element {
              start: 115,
              end: 157,
              type: 'Element',
              attributes: [],
              actions: [],
              bindings: [],
              classes: [],
              styles: [],
              handlers: [],
              lets: [],
              intro: null,
              outro: null,
              animation: null,
              name: 'span',
              tag_expr: Expression {
                type: 'Expression',
                references: Set(0) {},
                dependencies: Set(0) {},
                contextual_dependencies: Set(0) {},
                declarations: [],
                uses_context: false,
                node: { type: 'Literal', value: 'span' },
                template_scope: TemplateScope {
                  owners: Map(0) {},
                  parent: undefined,
                  names: Set(0) {},
                  dependencies_for_name: Map(0) {}
                },
                owner: [Circular *1],
                scope: Scope$1 {
                  parent: null,
                  block: false,
                  declarations: Map(0) {},
                  initialised_declarations: Set(0) {},
                  references: Set(0) {}
                },
                scope_map: WeakMap { <items unknown> }
              },
              namespace: null,
              scope: TemplateScope {
                owners: Map(0) {},
                parent: undefined,
                names: Set(0) {},
                dependencies_for_name: Map(0) {}
              },
              children: [
                <ref *2> MustacheTag {
                  start: 121,
                  end: 150,
                  type: 'MustacheTag',
                  expression: Expression {
                    type: 'Expression',
                    references: Set(1) { 'parent2' },
                    dependencies: Set(1) { 'parent2' },
                    contextual_dependencies: Set(0) {},
                    declarations: [],
                    uses_context: false,
                    node: Node2 {
                      type: 'CallExpression',
                      start: 122,
                      end: 149,
                      loc: SourceLocation2 {
                        start: Position2 { line: 10, column: 13 },
                        end: Position2 { line: 10, column: 40 }
                      },
                      callee: Node2 {
                        type: 'MemberExpression',
                        start: 122,
                        end: 147,
                        loc: SourceLocation2 {
                          start: Position2 { line: 10, column: 13 },
                          end: Position2 { line: 10, column: 38 }
                        },
                        object: Node2 {
                          type: 'Identifier',
                          start: 122,
                          end: 129,
                          loc: SourceLocation2 {
                            start: Position2 { line: 10, column: 13 },
                            end: Position2 { line: 10, column: 20 }
                          },
                          name: 'parent2'
                        },
                        property: Node2 {
                          type: 'Identifier',
                          start: 130,
                          end: 147,
                          loc: SourceLocation2 {
                            start: Position2 { line: 10, column: 21 },
                            end: Position2 { line: 10, column: 38 }
                          },
                          name: 'toLocaleLowerCase'
                        },
                        computed: false,
                        optional: false
                      },
                      arguments: [],
                      optional: false
                    },
                    template_scope: TemplateScope {
                      owners: Map(0) {},
                      parent: undefined,
                      names: Set(0) {},
                      dependencies_for_name: Map(0) {}
                    },
                    owner: [Circular *2],
                    scope: Scope$1 {
                      parent: null,
                      block: false,
                      declarations: Map(0) {},
                      initialised_declarations: Set(0) {},
                      references: Set(1) { 'parent2' }
                    },
                    scope_map: WeakMap { <items unknown> }
                  },
                  should_cache: true,
                  prev: null
                }
              ],
              prev: null
            }
          ],
          prev: [Circular *5]
        }
      },
      <ref *3> Element {
        start: 109,
        end: 164,
        type: 'Element',
        attributes: [],
        actions: [],
        bindings: [],
        classes: [],
        styles: [],
        handlers: [],
        lets: [],
        intro: null,
        outro: null,
        animation: null,
        name: 'span',
        tag_expr: Expression {
          type: 'Expression',
          references: Set(0) {},
          dependencies: Set(0) {},
          contextual_dependencies: Set(0) {},
          declarations: [],
          uses_context: false,
          node: { type: 'Literal', value: 'span' },
          template_scope: TemplateScope {
            owners: Map(0) {},
            parent: undefined,
            names: Set(0) {},
            dependencies_for_name: Map(0) {}
          },
          owner: [Circular *3],
          scope: Scope$1 {
            parent: null,
            block: false,
            declarations: Map(0) {},
            initialised_declarations: Set(0) {},
            references: Set(0) {}
          },
          scope_map: WeakMap { <items unknown> }
        },
        namespace: null,
        scope: TemplateScope {
          owners: Map(0) {},
          parent: undefined,
          names: Set(0) {},
          dependencies_for_name: Map(0) {}
        },
        children: [
          <ref *1> Element {
            start: 115,
            end: 157,
            type: 'Element',
            attributes: [],
            actions: [],
            bindings: [],
            classes: [],
            styles: [],
            handlers: [],
            lets: [],
            intro: null,
            outro: null,
            animation: null,
            name: 'span',
            tag_expr: Expression {
              type: 'Expression',
              references: Set(0) {},
              dependencies: Set(0) {},
              contextual_dependencies: Set(0) {},
              declarations: [],
              uses_context: false,
              node: { type: 'Literal', value: 'span' },
              template_scope: TemplateScope {
                owners: Map(0) {},
                parent: undefined,
                names: Set(0) {},
                dependencies_for_name: Map(0) {}
              },
              owner: [Circular *1],
              scope: Scope$1 {
                parent: null,
                block: false,
                declarations: Map(0) {},
                initialised_declarations: Set(0) {},
                references: Set(0) {}
              },
              scope_map: WeakMap { <items unknown> }
            },
            namespace: null,
            scope: TemplateScope {
              owners: Map(0) {},
              parent: undefined,
              names: Set(0) {},
              dependencies_for_name: Map(0) {}
            },
            children: [
              <ref *2> MustacheTag {
                start: 121,
                end: 150,
                type: 'MustacheTag',
                expression: Expression {
                  type: 'Expression',
                  references: Set(1) { 'parent2' },
                  dependencies: Set(1) { 'parent2' },
                  contextual_dependencies: Set(0) {},
                  declarations: [],
                  uses_context: false,
                  node: Node2 {
                    type: 'CallExpression',
                    start: 122,
                    end: 149,
                    loc: SourceLocation2 {
                      start: Position2 { line: 10, column: 13 },
                      end: Position2 { line: 10, column: 40 }
                    },
                    callee: Node2 {
                      type: 'MemberExpression',
                      start: 122,
                      end: 147,
                      loc: SourceLocation2 {
                        start: Position2 { line: 10, column: 13 },
                        end: Position2 { line: 10, column: 38 }
                      },
                      object: Node2 {
                        type: 'Identifier',
                        start: 122,
                        end: 129,
                        loc: SourceLocation2 {
                          start: Position2 { line: 10, column: 13 },
                          end: Position2 { line: 10, column: 20 }
                        },
                        name: 'parent2'
                      },
                      property: Node2 {
                        type: 'Identifier',
                        start: 130,
                        end: 147,
                        loc: SourceLocation2 {
                          start: Position2 { line: 10, column: 21 },
                          end: Position2 { line: 10, column: 38 }
                        },
                        name: 'toLocaleLowerCase'
                      },
                      computed: false,
                      optional: false
                    },
                    arguments: [],
                    optional: false
                  },
                  template_scope: TemplateScope {
                    owners: Map(0) {},
                    parent: undefined,
                    names: Set(0) {},
                    dependencies_for_name: Map(0) {}
                  },
                  owner: [Circular *2],
                  scope: Scope$1 {
                    parent: null,
                    block: false,
                    declarations: Map(0) {},
                    initialised_declarations: Set(0) {},
                    references: Set(1) { 'parent2' }
                  },
                  scope_map: WeakMap { <items unknown> }
                },
                should_cache: true,
                prev: null
              }
            ],
            prev: null
          }
        ],
        prev: <ref *5> Text {
          start: 107,
          end: 109,
          type: 'Text',
          data: '\n\n',
          synthetic: false,
          prev: <ref *4> MustacheTag {
            start: 98,
            end: 107,
            type: 'MustacheTag',
            expression: Expression {
              type: 'Expression',
              references: Set(1) { 'parent1' },
              dependencies: Set(1) { 'parent1' },
              contextual_dependencies: Set(0) {},
              declarations: [],
              uses_context: false,
              node: Node2 {
                type: 'Identifier',
                start: 99,
                end: 106,
                loc: SourceLocation2 {
                  start: Position2 { line: 8, column: 1 },
                  end: Position2 { line: 8, column: 8 }
                },
                name: 'parent1'
              },
              template_scope: TemplateScope {
                owners: Map(0) {},
                parent: undefined,
                names: Set(0) {},
                dependencies_for_name: Map(0) {}
              },
              owner: [Circular *4],
              scope: Scope$1 {
                parent: null,
                block: false,
                declarations: Map(0) {},
                initialised_declarations: Set(0) {},
                references: Set(0) {}
              },
              scope_map: WeakMap { <items unknown> }
            },
            should_cache: false,
            prev: <ref *6> Text {
              start: 96,
              end: 98,
              type: 'Text',
              data: '\n\n',
              synthetic: false,
              prev: null,
              next: [Circular *4]
            },
            next: [Circular *5]
          },
          next: [Circular *3]
        }
      }
    ]
  }
}