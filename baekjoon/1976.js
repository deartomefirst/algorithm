const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const N = +input[0];
const M = +input[1];
const map = [];
for (let i = 2; i < N + 2; i++) {
  map.push(input[i].split(' ').map(Number));
}
const mustCities = input.at(-1).split(' ').map(Number);
const parent = Array.from({ length: N + 1 }, (_, index) => index);

function find(n) {
  if (parent[n] !== n) {
    parent[n] = find(parent[n]);
  }
  return parent[n];
}

function union(a, b) {
  let rootA = find(a);
  let rootB = find(b);
  if (rootA !== rootB) {
    parent[rootB] = rootA;
  }
}

for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    if (map[i][j] === 1) {
      union(i + 1, j + 1);
    }
  }
}

let isConnect = true;
let start = find(mustCities[0]);
for (let i = 1; i < M; i++) {
  if (find(mustCities[i]) !== start) {
    isConnect = false;
    break;
  }
}
console.log(isConnect ? 'YES' : 'NO');
