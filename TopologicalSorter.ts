/// <reference path='./lib/node.d.ts' />
/// <reference path='./lib/linq.js.d.ts' />

export module ExtJS2TypeScript {
    var Enumerable = <linqjs.EnumerableStatic>require("./lib/linq.js");

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

    export class TopologicalSorter {
        sort(graph:GraphNode[]):any[] {
            var q = new Array();

            for (var g in graph) {
                if (graph[g].state == VisitState.Unvisited) {
                    this.checkVisitState(graph[g], q);
                }
            }

            return q;
        }

        checkVisitState(graph:GraphNode, q:any[]) {
            graph.state = VisitState.Visiting;

            Enumerable.from(graph.next)
                    .where(x=>x.state === VisitState.Unvisited)
                    .toArray()
                    .forEach(x=>this.checkVisitState(x, q));

            graph.state = VisitState.Visited;
            q.push(graph.node);
        }
    }

}
