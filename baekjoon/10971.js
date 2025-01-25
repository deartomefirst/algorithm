const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const cost = arr.map((v) => v.split(' ').map(Number));
const N = +n;
let visited = Array(N).fill(false);
let min = 1000000 * N + 1;
function permutation(cur, depth, price) {
  if (depth === N - 1) {
    if (cost[cur][0] !== 0) {
      min = Math.min(min, price + cost[cur][0]);
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i] && cost[cur][i] !== 0) {
      if (price + cost[cur][i] < min) {
        visited[i] = true;
        permutation(i, depth + 1, price + cost[cur][i]);
        visited[i] = false;
      }
    }
  }
}
permutation(0, 0, 0);
console.log(min);
