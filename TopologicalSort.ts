/// <reference path='./lib/node.d.ts' />
/// <reference path='./lib/linq.js.d.ts' />

export module zoetro{
    var Enumerable = require("./lib/linq.js");

    enum VisitState
    {
        Unvisited,
        Visiting,
        Visited
    }

    export class GraphNode {
        state:VisitState;
        next:GraphNode[];
        node:any;

        constructor(node:any) {
            this.node = node;
            this.state = VisitState.Unvisited;
            this.next = new GraphNode[];
        }
    }

    export class TopologicalSort {
        sort(graph:GraphNode[]):any[] {
            var q = new Queue();

            for (var g in graph) {
                if (graph[g].state == VisitState.Unvisited) {
                    this.checkVisitState(graph[g], q);
                }
            }

            return q.toArray();
        }

        checkVisitState(graph:GraphNode, q:Queue) {
            graph.state = VisitState.Visiting;

            Enumerable.from(graph.next)
                    .where(x=>x.state === VisitState.Unvisited)
                    .toArray()
                    .forEach(x=>this.checkVisitState(x, q));

            graph.state = VisitState.Visited;
            q.enqueue(graph.node);
        }
    }
//
// Queue (FIFO)
//
    class Queue {
        private array:any[];

        constructor() {
            this.array = new Array();
        }

        enqueue(o) {
            this.array.push(o);
        }

        dequeue():any {
            if (this.array.length > 0) {
                return this.array.shift();
            }
            return null;
        }

        size():Number {
            return this.array.length;
        }

        toString():String {
            return '[' + this.array.join(',') + ']';
        }

        toArray():any[] {
            return this.array;
        }
    }
    /*
     class TypeDependencyGraph
     {
     public static IEnumerable<CodeTypeDeclaration> Sort(CodeTypeDeclarationCollection types)
     {
     var structures = new Dictionary<string, GraphNode<CodeTypeDeclaration>>();
     var interfaces = new List<CodeTypeDeclaration>();
     var others= new List<CodeTypeDeclaration>();

     foreach (CodeTypeDeclaration type in types)
     {
     if (type.IsStruct && !type.UserData.Contains("IsException"))
     {
     structures.Add(type.Name, new GraphNode<CodeTypeDeclaration>(type));
     }
     else if(type.IsClass)
     {
     interfaces.Add(type);
     }
     else
     {
     others.Add(type);
     }
     }

     var ret = new List<CodeTypeDeclaration>();
     ret.AddRange(others);
     var sortedStructures = Create(structures);
     ret.AddRange(sortedStructures);
     ret.AddRange(interfaces);

     return ret;
     }

     private static IEnumerable<CodeTypeDeclaration> Create(Dictionary<string, GraphNode<CodeTypeDeclaration>> target)
     {
     var ret = new List<GraphNode<CodeTypeDeclaration>>();
     foreach (var graphNode in target.Values)
     {
     foreach (CodeTypeMember member in graphNode.Node.Members)
     {
     if (!(member is CodeMemberField)) continue;
     var field = member as CodeMemberField;

     string typeName;
     if (field.Type.BaseType == "System.Collections.Generic.List`1")
     {
     typeName = field.Type.TypeArguments[0].BaseType;
     }
     else
     {
     typeName = field.Type.BaseType;
     }

     if (!IiopUtility.IsPrimitive(typeName))
     {
     if (target.ContainsKey(typeName))
     {
     target[typeName].Next.Add(graphNode);
     //graphNode.Next.Add(target[typeName]);
     }
     }
     }
     ret.Add(graphNode);
     }

     return TopologicalSort.Sort(ret);
     }
     }
     */
/*
    class StructInfo {
        name:String;

        constructor(name:String) {
            this.name = name;
        }
    }


    var graph = new GraphNode[];

    var g1 = new GraphNode(new StructInfo("g1"));
    var g2 = new GraphNode(new StructInfo("g2"));
    var g3 = new GraphNode(new StructInfo("g3"));
    var g4 = new GraphNode(new StructInfo("g4"));
    var g5 = new GraphNode(new StructInfo("g5"));

    g5.next.push(g3);
    g4.next.push(g3);
    g3.next.push(g2);
    g1.next.push(g3);


    graph.push(g1);
    graph.push(g2);
    graph.push(g3);
    graph.push(g4);
    graph.push(g5);

    var ts = new TopologicalSort();
    var result = ts.sort(graph);
    result.forEach(x=>console.log(x.name));
*/
}