const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const V = +input[0];

const tree = Array.from({ length: V + 1 }, () => []);

for (let i = 1; i <= V; i++) {
  let arr = input[i].split(' ').map(Number);
  for (let j = 1; j < arr.length - 2; j += 2) {
    let [v, w] = [arr[j], arr[j + 1]];
    tree[arr[0]].push([v, w]);
  }
}
const visited = Array(V + 1).fill(false);
let maxNode = 0;
let maxDist = 0;

function dfs(node, dist) {
  visited[node] = true;
  if (maxDist < dist) {
    maxNode = node;
    maxDist = dist;
  }
  for (const [nextNode, nextDist] of tree[node]) {
    if (!visited[nextNode]) {
      dfs(nextNode, dist + nextDist);
    }
  }
}

dfs(1, 0);
visited.fill(false);
dfs(maxNode, 0);
console.log(maxDist);

/*



*/
