const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let nodes = input.map((v) => v.split(' ').map(Number));

const graph = {};
for (let i = 0; i < nodes.length; i++) {
  let [parent, child] = nodes[i];
  graph[child] = graph[child] || [];
  graph[parent] = graph[parent] || [];
  graph[child].push(parent);
  graph[parent].push(child);
}

function converToRootedTree(graph, root) {
  const tree = {};
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);
    tree[node] = [];
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        tree[node].push(neighbor);
        dfs(neighbor, node);
      }
    }
  }
  dfs(root, null);
  return tree;
}

let sortedTree = converToRootedTree(graph, 1);
let result = Array(+N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  for (let element of sortedTree[i]) {
    result[element] = i;
  }
}
console.log(result.filter((v, i) => i > 1).join('\n'));

/*

{
  '1': [ 6 , 4 ],
  '2': [ 4 ]
  '3': [ 6 , 5 ],
  '4': [ 1, 2, 7 ],
  '5': [ 3 ],
  '6': [ 3, 1 ],
  '7': [ 4 ]
}

*/
