// base graph class

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertexName) {
        if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
        return this.adjacencyList;
    }

    addEdge(start, finish) {
        // this is the base undirected graph
        if (this.adjacencyList[start]) {
            this.adjacencyList[start].push(finish);
        }

        if (this.adjacencyList[finish]) {
            this.adjacencyList[finish].push(start);
        }
        return this.adjacencyList;
    }

    removeEdge(start, finish) {
        if (this.adjacencyList[start]) {
            this.adjacencyList[start] = this.adjacencyList[start].filter((vtx) => vtx !== finish);
        }

        if (this.adjacencyList[finish]) {
            this.adjacencyList[finish] = this.adjacencyList[finish].filter((vtx) => vtx !== start);
        }
        return this.adjacencyList;
    }

    removeVertex(vertexName) {
        this.adjacencyList[vertexName].forEach((vtx) => {
            this.removeEdge(vertexName, vtx);
        });

        delete this.adjacencyList[vertexName];
        return this.adjacencyList;
    }

    dfs(start) {
        let result = [];
        const visited = {};

        const _dfs = (vertex) => {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return _dfs(neighbor);
                }
            });
        };

        _dfs(start);
        return result;
    }

    bfs(start) {
        const q = [start];
        let result = [];
        let visited = {};
        let currentVertex;
        visited[start] = true;

        while(q.length) {
            currentVertex = q.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.push(neighbor);
                }
            })
        };

        return result;
    }
};

module.exports = Graph;
