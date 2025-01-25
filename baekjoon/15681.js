const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, r, q] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i < n; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const subTreeSize = Array(n + 1).fill(0);
const visited = Array(n + 1).fill(false);

function dfs(curNode) {
  visited[curNode] = true;
  subTreeSize[curNode] = 1;

  for (const node of graph[curNode]) {
    if (!visited[node]) {
      subTreeSize[curNode] += dfs(node);
    }
  }
  return subTreeSize[curNode];
}
dfs(r);
const answer = [];
for (let i = n; i < n + q; i++) {
  answer.push(subTreeSize[+input[i]]);
}
console.log(answer.join('\n'));
