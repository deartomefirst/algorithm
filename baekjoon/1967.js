const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = +input[0];
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i < n; i++) {
  const [from, to, v] = input[i].split(' ').map(Number);
  graph[from].push([to, v]);
  graph[to].push([from, v]);
}
const visited = Array(n + 1).fill(false);
let maxNode = 0;
let maxDist = 0;

function dfs(node, dist) {
  visited[node] = true;
  if (maxDist < dist) {
    maxNode = node;
    maxDist = dist;
  }
  for (const [nextNode, nextDist] of graph[node]) {
    if (!visited[nextNode]) {
      dfs(nextNode, dist + nextDist);
    }
  }
}
dfs(1, 0);
visited.fill(false);
dfs(maxNode, 0);
console.log(maxDist);
