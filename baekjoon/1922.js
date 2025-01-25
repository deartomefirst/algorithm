const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, M, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const parent = Array.from({ length: N + 1 }, (_, index) => index);
const rank = Array(N + 1).fill(1);

function find(a) {
  if (parent[a] !== a) {
    parent[a] = find(parent[a]);
  }
  return parent[a];
}
function union(a, b) {
  let rootA = find(a);
  let rootB = find(b);
  if (rootA !== rootB) {
    if (rank[a] > rank[b]) {
      parent[rootB] = rootA;
    } else if (rank[b] > rank[a]) {
      parent[rootA] = rootA;
    } else {
      parent[rootB] = rootA;
      rank[rootA]++;
    }
  }
}

const sorted = input
  .map((v) => v.split(' ').map(Number))
  .sort((a, b) => a[2] - b[2]);

let cost = 0;
let count = 0;
for (let i = 0; i < M; i++) {
  let [a, b, c] = sorted[i];
  if (find(a) !== find(b)) {
    union(a, b);
    cost += c;
    count++;
  }
  if (count === N - 1) break;
}
console.log(cost);
