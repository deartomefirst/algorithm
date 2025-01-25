const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [ve, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [V, E] = ve.split(' ').map(Number);

const sortedEdges = input
  .map((v) => v.split(' ').map(Number))
  .sort((a, b) => a[2] - b[2]);

// union - find
const parent = Array.from({ length: V + 1 }, (_, index) => index);
const rank = Array(V + 1).fill(1);

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
    if (rank[rootA] > rank[rootB]) {
      parent[rootB] = rootA;
    } else if (rank[rootA] < rank[rootB]) {
      parent[rootA] = rootB;
    } else {
      parent[rootB] = rootA;
      rank[rootA]++;
    }
  }
}

let weight = 0;
let count = 0;
for (let i = 0; i < E; i++) {
  let [A, B, C] = sortedEdges[i];
  if (find(A) !== find(B)) {
    union(A, B);
    weight += C;
    count++;
  }
  if (count === V - 1) break;
}
console.log(weight);

//


/*


*/