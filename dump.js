Component {
  ignore_stack: [],
  vars: [
    {
      name: 'parent1',
      initialised: true,
      writable: true,
      imported: false,
      referenced_from_script: true,
      export_name: 'parent1',
      is_reactive_dependency: true
    },
    {
      name: 'parent2',
      initialised: false,
      writable: true,
      imported: false,
      referenced_from_script: true,
      export_name: 'parent2',
      is_reactive_dependency: true
    },
    {
      name: 'var2',
      injected: true,
      writable: true,
      reassigned: true,
      initialised: true,
      is_reactive_dependency: true
    },
    {
      name: 'var1',
      injected: true,
      writable: true,
      reassigned: true,
      initialised: true
    }
  ],
  var_lookup: Map(4) {
    'parent1' => {
      name: 'parent1',
      initialised: true,
      writable: true,
      imported: false,
      referenced_from_script: true,
      export_name: 'parent1',
      is_reactive_dependency: true
    },
    'parent2' => {
      name: 'parent2',
      initialised: false,
      writable: true,
      imported: false,
      referenced_from_script: true,
      export_name: 'parent2',
      is_reactive_dependency: true
    },
    'var2' => {
      name: 'var2',
      injected: true,
      writable: true,
      reassigned: true,
      initialised: true,
      is_reactive_dependency: true
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
  hoistable_nodes: Set(0) {},
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
      start: 49,
      end: 61,
      loc: SourceLocation {
        start: Position { line: 3, column: 9 },
        end: Position { line: 3, column: 21 }
      },
      declarations: [
        Node {
          type: 'VariableDeclarator',
          start: 53,
          end: 60,
          loc: SourceLocation {
            start: Position { line: 3, column: 13 },
            end: Position { line: 3, column: 20 }
          },
          id: Node {
            type: 'Identifier',
            start: 53,
            end: 60,
            loc: SourceLocation {
              start: Position { line: 3, column: 13 },
              end: Position { line: 3, column: 20 }
            },
            name: 'parent2'
          },
          init: null
        }
      ],
      kind: 'let'
    }
  },
  partly_hoisted: [],
  fully_hoisted: [],
  reactive_declarations: [
    {
      assignees: Set(1) { 'var1' },
      dependencies: Set(1) { 'parent1' },
      node: Node {
        type: 'LabeledStatement',
        start: 65,
        end: 83,
        loc: SourceLocation {
          start: Position { line: 5, column: 2 },
          end: Position { line: 5, column: 20 }
        },
        body: Node {
          type: 'ExpressionStatement',
          start: 68,
          end: 83,
          loc: SourceLocation {
            start: Position { line: 5, column: 5 },
            end: Position { line: 5, column: 20 }
          },
          expression: Node {
            type: 'AssignmentExpression',
            start: 68,
            end: 82,
            loc: SourceLocation {
              start: Position { line: 5, column: 5 },
              end: Position { line: 5, column: 19 }
            },
            operator: '=',
            left: Node {
              type: 'Identifier',
              start: 68,
              end: 72,
              loc: SourceLocation {
                start: Position { line: 5, column: 5 },
                end: Position { line: 5, column: 9 }
              },
              name: 'var1'
            },
            right: Node {
              type: 'Identifier',
              start: 75,
              end: 82,
              loc: SourceLocation {
                start: Position { line: 5, column: 12 },
                end: Position { line: 5, column: 19 }
              },
              name: 'parent1'
            }
          }
        },
        label: Node {
          type: 'Identifier',
          start: 65,
          end: 66,
          loc: SourceLocation {
            start: Position { line: 5, column: 2 },
            end: Position { line: 5, column: 3 }
          },
          name: '$'
        }
      },
      declaration: Node {
        type: 'Identifier',
        start: 68,
        end: 72,
        loc: SourceLocation {
          start: Position { line: 5, column: 5 },
          end: Position { line: 5, column: 9 }
        },
        name: 'var1'
      }
    },
    {
      assignees: Set(1) { 'var2' },
      dependencies: Set(1) { 'parent2' },
      node: Node {
        type: 'LabeledStatement',
        start: 86,
        end: 104,
        loc: SourceLocation {
          start: Position { line: 6, column: 2 },
          end: Position { line: 6, column: 20 }
        },
        body: Node {
          type: 'ExpressionStatement',
          start: 89,
          end: 104,
          loc: SourceLocation {
            start: Position { line: 6, column: 5 },
            end: Position { line: 6, column: 20 }
          },
          expression: Node {
            type: 'AssignmentExpression',
            start: 89,
            end: 103,
            loc: SourceLocation {
              start: Position { line: 6, column: 5 },
              end: Position { line: 6, column: 19 }
            },
            operator: '=',
            left: Node {
              type: 'Identifier',
              start: 89,
              end: 93,
              loc: SourceLocation {
                start: Position { line: 6, column: 5 },
                end: Position { line: 6, column: 9 }
              },
              name: 'var2'
            },
            right: Node {
              type: 'Identifier',
              start: 96,
              end: 103,
              loc: SourceLocation {
                start: Position { line: 6, column: 12 },
                end: Position { line: 6, column: 19 }
              },
              name: 'parent2'
            }
          }
        },
        label: Node {
          type: 'Identifier',
          start: 86,
          end: 87,
          loc: SourceLocation {
            start: Position { line: 6, column: 2 },
            end: Position { line: 6, column: 3 }
          },
          name: '$'
        }
      },
      declaration: Node {
        type: 'Identifier',
        start: 89,
        end: 93,
        loc: SourceLocation {
          start: Position { line: 6, column: 5 },
          end: Position { line: 6, column: 9 }
        },
        name: 'var2'
      }
    },
    {
      assignees: Set(1) { 'var2' },
      dependencies: Set(2) { 'var2', 'parent1' },
      node: Node {
        type: 'LabeledStatement',
        start: 108,
        end: 160,
        loc: SourceLocation {
          start: Position { line: 8, column: 2 },
          end: Position { line: 12, column: 3 }
        },
        body: Node {
          type: 'BlockStatement',
          start: 111,
          end: 160,
          loc: SourceLocation {
            start: Position { line: 8, column: 5 },
            end: Position { line: 12, column: 3 }
          },
          body: [
            Node {
              type: 'IfStatement',
              start: 117,
              end: 156,
              loc: SourceLocation {
                start: Position { line: 9, column: 4 },
                end: Position { line: 11, column: 5 }
              },
              test: Node {
                type: 'Identifier',
                start: 121,
                end: 125,
                loc: SourceLocation {
                  start: Position { line: 9, column: 8 },
                  end: Position { line: 9, column: 12 }
                },
                name: 'var2'
              },
              consequent: Node {
                type: 'BlockStatement',
                start: 127,
                end: 156,
                loc: SourceLocation {
                  start: Position { line: 9, column: 14 },
                  end: Position { line: 11, column: 5 }
                },
                body: [
                  Node {
                    type: 'ExpressionStatement',
                    start: 135,
                    end: 150,
                    loc: SourceLocation {
                      start: Position { line: 10, column: 6 },
                      end: Position { line: 10, column: 21 }
                    },
                    expression: Node {
                      type: 'AssignmentExpression',
                      start: 135,
                      end: 149,
                      loc: SourceLocation {
                        start: Position { line: 10, column: 6 },
                        end: Position { line: 10, column: 20 }
                      },
                      operator: '=',
                      left: Node {
                        type: 'Identifier',
                        start: 135,
                        end: 139,
                        loc: SourceLocation {
                          start: Position { line: 10, column: 6 },
                          end: Position { line: 10, column: 10 }
                        },
                        name: 'var2'
                      },
                      right: Node {
                        type: 'Identifier',
                        start: 142,
                        end: 149,
                        loc: SourceLocation {
                          start: Position { line: 10, column: 13 },
                          end: Position { line: 10, column: 20 }
                        },
                        name: 'parent1'
                      }
                    }
                  }
                ]
              },
              alternate: null
            }
          ]
        },
        label: Node {
          type: 'Identifier',
          start: 108,
          end: 109,
          loc: SourceLocation {
            start: Position { line: 8, column: 2 },
            end: Position { line: 8, column: 3 }
          },
          name: '$'
        }
      },
      declaration: undefined
    }
  ],
  reactive_declaration_nodes: Set(3) {
    Node {
      type: 'LabeledStatement',
      start: 65,
      end: 83,
      loc: SourceLocation {
        start: Position { line: 5, column: 2 },
        end: Position { line: 5, column: 20 }
      },
      body: Node {
        type: 'ExpressionStatement',
        start: 68,
        end: 83,
        loc: SourceLocation {
          start: Position { line: 5, column: 5 },
          end: Position { line: 5, column: 20 }
        },
        expression: Node {
          type: 'AssignmentExpression',
          start: 68,
          end: 82,
          loc: SourceLocation {
            start: Position { line: 5, column: 5 },
            end: Position { line: 5, column: 19 }
          },
          operator: '=',
          left: Node {
            type: 'Identifier',
            start: 68,
            end: 72,
            loc: SourceLocation {
              start: Position { line: 5, column: 5 },
              end: Position { line: 5, column: 9 }
            },
            name: 'var1'
          },
          right: Node {
            type: 'Identifier',
            start: 75,
            end: 82,
            loc: SourceLocation {
              start: Position { line: 5, column: 12 },
              end: Position { line: 5, column: 19 }
            },
            name: 'parent1'
          }
        }
      },
      label: Node {
        type: 'Identifier',
        start: 65,
        end: 66,
        loc: SourceLocation {
          start: Position { line: 5, column: 2 },
          end: Position { line: 5, column: 3 }
        },
        name: '$'
      }
    },
    Node {
      type: 'LabeledStatement',
      start: 86,
      end: 104,
      loc: SourceLocation {
        start: Position { line: 6, column: 2 },
        end: Position { line: 6, column: 20 }
      },
      body: Node {
        type: 'ExpressionStatement',
        start: 89,
        end: 104,
        loc: SourceLocation {
          start: Position { line: 6, column: 5 },
          end: Position { line: 6, column: 20 }
        },
        expression: Node {
          type: 'AssignmentExpression',
          start: 89,
          end: 103,
          loc: SourceLocation {
            start: Position { line: 6, column: 5 },
            end: Position { line: 6, column: 19 }
          },
          operator: '=',
          left: Node {
            type: 'Identifier',
            start: 89,
            end: 93,
            loc: SourceLocation {
              start: Position { line: 6, column: 5 },
              end: Position { line: 6, column: 9 }
            },
            name: 'var2'
          },
          right: Node {
            type: 'Identifier',
            start: 96,
            end: 103,
            loc: SourceLocation {
              start: Position { line: 6, column: 12 },
              end: Position { line: 6, column: 19 }
            },
            name: 'parent2'
          }
        }
      },
      label: Node {
        type: 'Identifier',
        start: 86,
        end: 87,
        loc: SourceLocation {
          start: Position { line: 6, column: 2 },
          end: Position { line: 6, column: 3 }
        },
        name: '$'
      }
    },
    Node {
      type: 'LabeledStatement',
      start: 108,
      end: 160,
      loc: SourceLocation {
        start: Position { line: 8, column: 2 },
        end: Position { line: 12, column: 3 }
      },
      body: Node {
        type: 'BlockStatement',
        start: 111,
        end: 160,
        loc: SourceLocation {
          start: Position { line: 8, column: 5 },
          end: Position { line: 12, column: 3 }
        },
        body: [
          Node {
            type: 'IfStatement',
            start: 117,
            end: 156,
            loc: SourceLocation {
              start: Position { line: 9, column: 4 },
              end: Position { line: 11, column: 5 }
            },
            test: Node {
              type: 'Identifier',
              start: 121,
              end: 125,
              loc: SourceLocation {
                start: Position { line: 9, column: 8 },
                end: Position { line: 9, column: 12 }
              },
              name: 'var2'
            },
            consequent: Node {
              type: 'BlockStatement',
              start: 127,
              end: 156,
              loc: SourceLocation {
                start: Position { line: 9, column: 14 },
                end: Position { line: 11, column: 5 }
              },
              body: [
                Node {
                  type: 'ExpressionStatement',
                  start: 135,
                  end: 150,
                  loc: SourceLocation {
                    start: Position { line: 10, column: 6 },
                    end: Position { line: 10, column: 21 }
                  },
                  expression: Node {
                    type: 'AssignmentExpression',
                    start: 135,
                    end: 149,
                    loc: SourceLocation {
                      start: Position { line: 10, column: 6 },
                      end: Position { line: 10, column: 20 }
                    },
                    operator: '=',
                    left: Node {
                      type: 'Identifier',
                      start: 135,
                      end: 139,
                      loc: SourceLocation {
                        start: Position { line: 10, column: 6 },
                        end: Position { line: 10, column: 10 }
                      },
                      name: 'var2'
                    },
                    right: Node {
                      type: 'Identifier',
                      start: 142,
                      end: 149,
                      loc: SourceLocation {
                        start: Position { line: 10, column: 13 },
                        end: Position { line: 10, column: 20 }
                      },
                      name: 'parent1'
                    }
                  }
                }
              ]
            },
            alternate: null
          }
        ]
      },
      label: Node {
        type: 'Identifier',
        start: 108,
        end: 109,
        loc: SourceLocation {
          start: Position { line: 8, column: 2 },
          end: Position { line: 8, column: 3 }
        },
        name: '$'
      }
    }
  },
  has_reactive_assignments: false,
  injected_reactive_declaration_vars: Set(2) { 'var1', 'var2' },
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
  warnings: [],
  ast: {
    html: { start: null, end: null, type: 'Fragment', children: [] },
    css: undefined,
    instance: {
      type: 'Script',
      start: 0,
      end: 205,
      context: 'default',
      content: Node {
        type: 'Program',
        start: 8,
        end: 196,
        loc: SourceLocation {
          start: Position { line: 1, column: 0 },
          end: Position { line: 15, column: 0 }
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
          },
          Node {
            type: 'VariableDeclaration',
            start: 49,
            end: 61,
            loc: SourceLocation {
              start: Position { line: 3, column: 9 },
              end: Position { line: 3, column: 21 }
            },
            declarations: [
              Node {
                type: 'VariableDeclarator',
                start: 53,
                end: 60,
                loc: SourceLocation {
                  start: Position { line: 3, column: 13 },
                  end: Position { line: 3, column: 20 }
                },
                id: Node {
                  type: 'Identifier',
                  start: 53,
                  end: 60,
                  loc: SourceLocation {
                    start: Position { line: 3, column: 13 },
                    end: Position { line: 3, column: 20 }
                  },
                  name: 'parent2'
                },
                init: null
              }
            ],
            kind: 'let'
          },
          Node {
            type: 'LabeledStatement',
            start: 65,
            end: 83,
            loc: SourceLocation {
              start: Position { line: 5, column: 2 },
              end: Position { line: 5, column: 20 }
            },
            body: Node {
              type: 'ExpressionStatement',
              start: 68,
              end: 83,
              loc: SourceLocation {
                start: Position { line: 5, column: 5 },
                end: Position { line: 5, column: 20 }
              },
              expression: Node {
                type: 'AssignmentExpression',
                start: 68,
                end: 82,
                loc: SourceLocation {
                  start: Position { line: 5, column: 5 },
                  end: Position { line: 5, column: 19 }
                },
                operator: '=',
                left: Node {
                  type: 'Identifier',
                  start: 68,
                  end: 72,
                  loc: SourceLocation {
                    start: Position { line: 5, column: 5 },
                    end: Position { line: 5, column: 9 }
                  },
                  name: 'var1'
                },
                right: Node {
                  type: 'Identifier',
                  start: 75,
                  end: 82,
                  loc: SourceLocation {
                    start: Position { line: 5, column: 12 },
                    end: Position { line: 5, column: 19 }
                  },
                  name: 'parent1'
                }
              }
            },
            label: Node {
              type: 'Identifier',
              start: 65,
              end: 66,
              loc: SourceLocation {
                start: Position { line: 5, column: 2 },
                end: Position { line: 5, column: 3 }
              },
              name: '$'
            }
          },
          Node {
            type: 'LabeledStatement',
            start: 86,
            end: 104,
            loc: SourceLocation {
              start: Position { line: 6, column: 2 },
              end: Position { line: 6, column: 20 }
            },
            body: Node {
              type: 'ExpressionStatement',
              start: 89,
              end: 104,
              loc: SourceLocation {
                start: Position { line: 6, column: 5 },
                end: Position { line: 6, column: 20 }
              },
              expression: Node {
                type: 'AssignmentExpression',
                start: 89,
                end: 103,
                loc: SourceLocation {
                  start: Position { line: 6, column: 5 },
                  end: Position { line: 6, column: 19 }
                },
                operator: '=',
                left: Node {
                  type: 'Identifier',
                  start: 89,
                  end: 93,
                  loc: SourceLocation {
                    start: Position { line: 6, column: 5 },
                    end: Position { line: 6, column: 9 }
                  },
                  name: 'var2'
                },
                right: Node {
                  type: 'Identifier',
                  start: 96,
                  end: 103,
                  loc: SourceLocation {
                    start: Position { line: 6, column: 12 },
                    end: Position { line: 6, column: 19 }
                  },
                  name: 'parent2'
                }
              }
            },
            label: Node {
              type: 'Identifier',
              start: 86,
              end: 87,
              loc: SourceLocation {
                start: Position { line: 6, column: 2 },
                end: Position { line: 6, column: 3 }
              },
              name: '$'
            }
          },
          Node {
            type: 'LabeledStatement',
            start: 108,
            end: 160,
            loc: SourceLocation {
              start: Position { line: 8, column: 2 },
              end: Position { line: 12, column: 3 }
            },
            body: Node {
              type: 'BlockStatement',
              start: 111,
              end: 160,
              loc: SourceLocation {
                start: Position { line: 8, column: 5 },
                end: Position { line: 12, column: 3 }
              },
              body: [
                Node {
                  type: 'IfStatement',
                  start: 117,
                  end: 156,
                  loc: SourceLocation {
                    start: Position { line: 9, column: 4 },
                    end: Position { line: 11, column: 5 }
                  },
                  test: Node {
                    type: 'Identifier',
                    start: 121,
                    end: 125,
                    loc: SourceLocation {
                      start: Position { line: 9, column: 8 },
                      end: Position { line: 9, column: 12 }
                    },
                    name: 'var2'
                  },
                  consequent: Node {
                    type: 'BlockStatement',
                    start: 127,
                    end: 156,
                    loc: SourceLocation {
                      start: Position { line: 9, column: 14 },
                      end: Position { line: 11, column: 5 }
                    },
                    body: [
                      Node {
                        type: 'ExpressionStatement',
                        start: 135,
                        end: 150,
                        loc: SourceLocation {
                          start: Position { line: 10, column: 6 },
                          end: Position { line: 10, column: 21 }
                        },
                        expression: Node {
                          type: 'AssignmentExpression',
                          start: 135,
                          end: 149,
                          loc: SourceLocation {
                            start: Position { line: 10, column: 6 },
                            end: Position { line: 10, column: 20 }
                          },
                          operator: '=',
                          left: Node {
                            type: 'Identifier',
                            start: 135,
                            end: 139,
                            loc: SourceLocation {
                              start: Position { line: 10, column: 6 },
                              end: Position { line: 10, column: 10 }
                            },
                            name: 'var2'
                          },
                          right: Node {
                            type: 'Identifier',
                            start: 142,
                            end: 149,
                            loc: SourceLocation {
                              start: Position { line: 10, column: 13 },
                              end: Position { line: 10, column: 20 }
                            },
                            name: 'parent1'
                          }
                        }
                      }
                    ]
                  },
                  alternate: null
                }
              ]
            },
            label: Node {
              type: 'Identifier',
              start: 108,
              end: 109,
              loc: SourceLocation {
                start: Position { line: 8, column: 2 },
                end: Position { line: 8, column: 3 }
              },
              name: '$'
            }
          }
        ],
        sourceType: 'module',
        trailingComments: [
          {
            type: 'Line',
            value: ' $: var6 = parent1 + parent2;',
            start: 164,
            end: 195
          }
        ]
      }
    },
    module: undefined
  },
  source: '<script>\n' +
    '  export let parent1 = "test";\n' +
    '  export let parent2;\n' +
    '\n' +
    '  $: var1 = parent1;\n' +
    '  $: var2 = parent2;\n' +
    '\n' +
    '  $: {\n' +
    '    if (var2) {\n' +
    '      var2 = parent1;\n' +
    '    }\n' +
    '  }\n' +
    '\n' +
    '  // $: var6 = parent1 + parent2;\n' +
    '</script>\n',
  compile_options: { name: 'MyComponent' },
  original_ast: {
    html: { start: null, end: null, type: 'Fragment', children: [] },
    css: undefined,
    instance: {
      type: 'Script',
      start: 0,
      end: 205,
      context: 'default',
      content: {
        type: 'Program',
        start: 8,
        end: 196,
        loc: { start: { line: 1, column: 0 }, end: { line: 15, column: 0 } },
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
            type: 'ExportNamedDeclaration',
            start: 42,
            end: 61,
            loc: {
              start: { line: 3, column: 2 },
              end: { line: 3, column: 21 }
            },
            declaration: {
              type: 'VariableDeclaration',
              start: 49,
              end: 61,
              loc: {
                start: { line: 3, column: 9 },
                end: { line: 3, column: 21 }
              },
              declarations: [
                {
                  type: 'VariableDeclarator',
                  start: 53,
                  end: 60,
                  loc: {
                    start: { line: 3, column: 13 },
                    end: { line: 3, column: 20 }
                  },
                  id: {
                    type: 'Identifier',
                    start: 53,
                    end: 60,
                    loc: {
                      start: { line: 3, column: 13 },
                      end: { line: 3, column: 20 }
                    },
                    name: 'parent2'
                  },
                  init: null
                }
              ],
              kind: 'let'
            },
            specifiers: [],
            source: null
          },
          {
            type: 'LabeledStatement',
            start: 65,
            end: 83,
            loc: {
              start: { line: 5, column: 2 },
              end: { line: 5, column: 20 }
            },
            body: {
              type: 'ExpressionStatement',
              start: 68,
              end: 83,
              loc: {
                start: { line: 5, column: 5 },
                end: { line: 5, column: 20 }
              },
              expression: {
                type: 'AssignmentExpression',
                start: 68,
                end: 82,
                loc: {
                  start: { line: 5, column: 5 },
                  end: { line: 5, column: 19 }
                },
                operator: '=',
                left: {
                  type: 'Identifier',
                  start: 68,
                  end: 72,
                  loc: {
                    start: { line: 5, column: 5 },
                    end: { line: 5, column: 9 }
                  },
                  name: 'var1'
                },
                right: {
                  type: 'Identifier',
                  start: 75,
                  end: 82,
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
              start: 65,
              end: 66,
              loc: {
                start: { line: 5, column: 2 },
                end: { line: 5, column: 3 }
              },
              name: '$'
            }
          },
          {
            type: 'LabeledStatement',
            start: 86,
            end: 104,
            loc: {
              start: { line: 6, column: 2 },
              end: { line: 6, column: 20 }
            },
            body: {
              type: 'ExpressionStatement',
              start: 89,
              end: 104,
              loc: {
                start: { line: 6, column: 5 },
                end: { line: 6, column: 20 }
              },
              expression: {
                type: 'AssignmentExpression',
                start: 89,
                end: 103,
                loc: {
                  start: { line: 6, column: 5 },
                  end: { line: 6, column: 19 }
                },
                operator: '=',
                left: {
                  type: 'Identifier',
                  start: 89,
                  end: 93,
                  loc: {
                    start: { line: 6, column: 5 },
                    end: { line: 6, column: 9 }
                  },
                  name: 'var2'
                },
                right: {
                  type: 'Identifier',
                  start: 96,
                  end: 103,
                  loc: {
                    start: { line: 6, column: 12 },
                    end: { line: 6, column: 19 }
                  },
                  name: 'parent2'
                }
              }
            },
            label: {
              type: 'Identifier',
              start: 86,
              end: 87,
              loc: {
                start: { line: 6, column: 2 },
                end: { line: 6, column: 3 }
              },
              name: '$'
            }
          },
          {
            type: 'LabeledStatement',
            start: 108,
            end: 160,
            loc: {
              start: { line: 8, column: 2 },
              end: { line: 12, column: 3 }
            },
            body: {
              type: 'BlockStatement',
              start: 111,
              end: 160,
              loc: {
                start: { line: 8, column: 5 },
                end: { line: 12, column: 3 }
              },
              body: [
                {
                  type: 'IfStatement',
                  start: 117,
                  end: 156,
                  loc: {
                    start: { line: 9, column: 4 },
                    end: { line: 11, column: 5 }
                  },
                  test: {
                    type: 'Identifier',
                    start: 121,
                    end: 125,
                    loc: {
                      start: { line: 9, column: 8 },
                      end: { line: 9, column: 12 }
                    },
                    name: 'var2'
                  },
                  consequent: {
                    type: 'BlockStatement',
                    start: 127,
                    end: 156,
                    loc: {
                      start: { line: 9, column: 14 },
                      end: { line: 11, column: 5 }
                    },
                    body: [
                      {
                        type: 'ExpressionStatement',
                        start: 135,
                        end: 150,
                        loc: {
                          start: { line: 10, column: 6 },
                          end: { line: 10, column: 21 }
                        },
                        expression: {
                          type: 'AssignmentExpression',
                          start: 135,
                          end: 149,
                          loc: {
                            start: { line: 10, column: 6 },
                            end: { line: 10, column: 20 }
                          },
                          operator: '=',
                          left: {
                            type: 'Identifier',
                            start: 135,
                            end: 139,
                            loc: {
                              start: { line: 10, column: 6 },
                              end: { line: 10, column: 10 }
                            },
                            name: 'var2'
                          },
                          right: {
                            type: 'Identifier',
                            start: 142,
                            end: 149,
                            loc: {
                              start: { line: 10, column: 13 },
                              end: { line: 10, column: 20 }
                            },
                            name: 'parent1'
                          }
                        }
                      }
                    ]
                  },
                  alternate: null
                }
              ]
            },
            label: {
              type: 'Identifier',
              start: 108,
              end: 109,
              loc: {
                start: { line: 8, column: 2 },
                end: { line: 8, column: 3 }
              },
              name: '$'
            }
          }
        ],
        sourceType: 'module',
        trailingComments: [
          {
            type: 'Line',
            value: ' $: var6 = parent1 + parent2;',
            start: 164,
            end: 195
          }
        ]
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
      '  export let parent2;\n' +
      '\n' +
      '  $: var1 = parent1;\n' +
      '  $: var2 = parent2;\n' +
      '\n' +
      '  $: {\n' +
      '    if (var2) {\n' +
      '      var2 = parent1;\n' +
      '    }\n' +
      '  }\n' +
      '\n' +
      '  // $: var6 = parent1 + parent2;\n' +
      '</script>\n',
    ast: {
      html: { start: null, end: null, type: 'Fragment', children: [] },
      css: undefined,
      instance: {
        type: 'Script',
        start: 0,
        end: 205,
        context: 'default',
        content: Node {
          type: 'Program',
          start: 8,
          end: 196,
          loc: SourceLocation {
            start: Position { line: 1, column: 0 },
            end: Position { line: 15, column: 0 }
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
            },
            Node {
              type: 'VariableDeclaration',
              start: 49,
              end: 61,
              loc: SourceLocation {
                start: Position { line: 3, column: 9 },
                end: Position { line: 3, column: 21 }
              },
              declarations: [
                Node {
                  type: 'VariableDeclarator',
                  start: 53,
                  end: 60,
                  loc: SourceLocation {
                    start: Position { line: 3, column: 13 },
                    end: Position { line: 3, column: 20 }
                  },
                  id: Node {
                    type: 'Identifier',
                    start: 53,
                    end: 60,
                    loc: SourceLocation {
                      start: Position { line: 3, column: 13 },
                      end: Position { line: 3, column: 20 }
                    },
                    name: 'parent2'
                  },
                  init: null
                }
              ],
              kind: 'let'
            },
            Node {
              type: 'LabeledStatement',
              start: 65,
              end: 83,
              loc: SourceLocation {
                start: Position { line: 5, column: 2 },
                end: Position { line: 5, column: 20 }
              },
              body: Node {
                type: 'ExpressionStatement',
                start: 68,
                end: 83,
                loc: SourceLocation {
                  start: Position { line: 5, column: 5 },
                  end: Position { line: 5, column: 20 }
                },
                expression: Node {
                  type: 'AssignmentExpression',
                  start: 68,
                  end: 82,
                  loc: SourceLocation {
                    start: Position { line: 5, column: 5 },
                    end: Position { line: 5, column: 19 }
                  },
                  operator: '=',
                  left: Node {
                    type: 'Identifier',
                    start: 68,
                    end: 72,
                    loc: SourceLocation {
                      start: Position { line: 5, column: 5 },
                      end: Position { line: 5, column: 9 }
                    },
                    name: 'var1'
                  },
                  right: Node {
                    type: 'Identifier',
                    start: 75,
                    end: 82,
                    loc: SourceLocation {
                      start: Position { line: 5, column: 12 },
                      end: Position { line: 5, column: 19 }
                    },
                    name: 'parent1'
                  }
                }
              },
              label: Node {
                type: 'Identifier',
                start: 65,
                end: 66,
                loc: SourceLocation {
                  start: Position { line: 5, column: 2 },
                  end: Position { line: 5, column: 3 }
                },
                name: '$'
              }
            },
            Node {
              type: 'LabeledStatement',
              start: 86,
              end: 104,
              loc: SourceLocation {
                start: Position { line: 6, column: 2 },
                end: Position { line: 6, column: 20 }
              },
              body: Node {
                type: 'ExpressionStatement',
                start: 89,
                end: 104,
                loc: SourceLocation {
                  start: Position { line: 6, column: 5 },
                  end: Position { line: 6, column: 20 }
                },
                expression: Node {
                  type: 'AssignmentExpression',
                  start: 89,
                  end: 103,
                  loc: SourceLocation {
                    start: Position { line: 6, column: 5 },
                    end: Position { line: 6, column: 19 }
                  },
                  operator: '=',
                  left: Node {
                    type: 'Identifier',
                    start: 89,
                    end: 93,
                    loc: SourceLocation {
                      start: Position { line: 6, column: 5 },
                      end: Position { line: 6, column: 9 }
                    },
                    name: 'var2'
                  },
                  right: Node {
                    type: 'Identifier',
                    start: 96,
                    end: 103,
                    loc: SourceLocation {
                      start: Position { line: 6, column: 12 },
                      end: Position { line: 6, column: 19 }
                    },
                    name: 'parent2'
                  }
                }
              },
              label: Node {
                type: 'Identifier',
                start: 86,
                end: 87,
                loc: SourceLocation {
                  start: Position { line: 6, column: 2 },
                  end: Position { line: 6, column: 3 }
                },
                name: '$'
              }
            },
            Node {
              type: 'LabeledStatement',
              start: 108,
              end: 160,
              loc: SourceLocation {
                start: Position { line: 8, column: 2 },
                end: Position { line: 12, column: 3 }
              },
              body: Node {
                type: 'BlockStatement',
                start: 111,
                end: 160,
                loc: SourceLocation {
                  start: Position { line: 8, column: 5 },
                  end: Position { line: 12, column: 3 }
                },
                body: [
                  Node {
                    type: 'IfStatement',
                    start: 117,
                    end: 156,
                    loc: SourceLocation {
                      start: Position { line: 9, column: 4 },
                      end: Position { line: 11, column: 5 }
                    },
                    test: Node {
                      type: 'Identifier',
                      start: 121,
                      end: 125,
                      loc: SourceLocation {
                        start: Position { line: 9, column: 8 },
                        end: Position { line: 9, column: 12 }
                      },
                      name: 'var2'
                    },
                    consequent: Node {
                      type: 'BlockStatement',
                      start: 127,
                      end: 156,
                      loc: SourceLocation {
                        start: Position { line: 9, column: 14 },
                        end: Position { line: 11, column: 5 }
                      },
                      body: [
                        Node {
                          type: 'ExpressionStatement',
                          start: 135,
                          end: 150,
                          loc: SourceLocation {
                            start: Position { line: 10, column: 6 },
                            end: Position { line: 10, column: 21 }
                          },
                          expression: Node {
                            type: 'AssignmentExpression',
                            start: 135,
                            end: 149,
                            loc: SourceLocation {
                              start: Position { line: 10, column: 6 },
                              end: Position { line: 10, column: 20 }
                            },
                            operator: '=',
                            left: Node {
                              type: 'Identifier',
                              start: 135,
                              end: 139,
                              loc: SourceLocation {
                                start: Position { line: 10, column: 6 },
                                end: Position { line: 10, column: 10 }
                              },
                              name: 'var2'
                            },
                            right: Node {
                              type: 'Identifier',
                              start: 142,
                              end: 149,
                              loc: SourceLocation {
                                start: Position { line: 10, column: 13 },
                                end: Position { line: 10, column: 20 }
                              },
                              name: 'parent1'
                            }
                          }
                        }
                      ]
                    },
                    alternate: null
                  }
                ]
              },
              label: Node {
                type: 'Identifier',
                start: 108,
                end: 109,
                loc: SourceLocation {
                  start: Position { line: 8, column: 2 },
                  end: Position { line: 8, column: 3 }
                },
                name: '$'
              }
            }
          ],
          sourceType: 'module',
          trailingComments: [
            {
              type: 'Line',
              value: ' $: var6 = parent1 + parent2;',
              start: 164,
              end: 195
            }
          ]
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
        start: 49,
        end: 61,
        loc: SourceLocation {
          start: Position { line: 3, column: 9 },
          end: Position { line: 3, column: 21 }
        },
        declarations: [
          Node {
            type: 'VariableDeclarator',
            start: 53,
            end: 60,
            loc: SourceLocation {
              start: Position { line: 3, column: 13 },
              end: Position { line: 3, column: 20 }
            },
            id: Node {
              type: 'Identifier',
              start: 53,
              end: 60,
              loc: SourceLocation {
                start: Position { line: 3, column: 13 },
                end: Position { line: 3, column: 20 }
              },
              name: 'parent2'
            },
            init: null
          }
        ],
        kind: 'let'
      }
    },
    initialised_declarations: Set(1) { 'parent1' },
    references: Set(4) { 'parent1', 'var2', 'parent2', 'var1' }
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