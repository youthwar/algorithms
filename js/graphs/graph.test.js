const graph = require('./graph');

describe('base graph class', () => {
    let Graph;

    beforeAll(() => {
        Graph = new graph();
    });

    it('should return a class', () => {
        // functions are classes duh
        expect(typeof graph).toEqual('function');
    });

    it('should be able to add Vertices', () => {
        expect(Graph.addVertex('A')).toEqual({'A': []});
        expect(Graph.addVertex('B')).toEqual({'A': [], 'B': []});
    });

    it('should be able to add edges', () => {
        expect(Graph.addEdge('A', 'B')).toEqual({'A': ['B'], 'B': ['A']});
    });

    it('should be able to remove edges', () => {
        expect(Graph.removeEdge('A', 'B')).toEqual({'A': [], 'B': []});
    });

    it('should be able to remove Vertices', () => {
        expect(Graph.removeVertex('A')).toEqual({'B': []});
    });

    it('traverses the graph depth first from a starting point', () => {
        Graph.addVertex("A");
        Graph.addVertex("B");
        Graph.addVertex("C");
        Graph.addVertex("D");
        Graph.addVertex("E");
        Graph.addVertex("F");

        Graph.addEdge("A","B", 4);
        Graph.addEdge("A","C", 2);
        Graph.addEdge("B","E", 3);
        Graph.addEdge("C","D", 2);
        Graph.addEdge("C","F", 4);
        Graph.addEdge("D","E", 3);
        Graph.addEdge("D","F", 1);
        Graph.addEdge("E","F", 1);

        expect(Graph.dfs('A')).toEqual(['A','B','E','D','C','F']);
    });

    it('traverses the graph Breadth first from a starting point', () => {
        expect(Graph.bfs('A')).toEqual(['A','B','C','E','D','F']);
    });

});