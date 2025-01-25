const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m] = nm.split(' ').map(Number);
const parent = Array.from({ length: n + 1 }, (_, index) => index);

function find(x) {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]);
  }
  return parent[x];
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);
  if (rootX !== rootY) {
    parent[rootY] = rootX;
  }
}

const answer = [];

const operations = input.map((v) => v.split(' ').map(Number));

for (let i = 0; i < m; i++) {
  let [type, a, b] = operations[i];
  if (type === 0) {
    union(a, b);
  } else if (type === 1) {
    answer.push(find(a) === find(b) ? 'YES' : 'NO');
  }
}
console.log(answer.join('\n'));
