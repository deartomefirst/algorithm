class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v2 !== v);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v1 !== v);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList.pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  dfsRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex]
        .sort((a, b) => a - b)
        .forEach((neighbor) => {
          if (!visited[neighbor]) return dfs(neighbor);
        });
    })(start);
    return result;
  }
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};

    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex]
        .sort((a, b) => a - b)
        .forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
    }
    return result;
  }
}

const [input, ...edges] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
const [vertexNum, edgeNum, startVertex] = input
  .trim()
  .split(' ')
  .map((v) => +v);
const graph = new Graph();
for (let i = 1; i <= vertexNum; i++) {
  graph.addVertex(i);
}
for (let i = 0; i < edgeNum; i++) {
  const [v1, v2] = edges[i]
    .trim()
    .split(' ')
    .map((v) => +v);
  graph.addEdge(v1, v2);
}

// console.log(graph.adjacencyList);

console.log(graph.dfsRecursive(startVertex).join(' '));
console.log(graph.bfs(startVertex).join(' '));
