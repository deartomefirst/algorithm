const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = +input[0];
const m = +input[1];

let graph = Array.from({ length: n }, () => Array(n).fill(Infinity));

for (let i = 2; i < 2 + m; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  graph[a - 1][b - 1] = Math.min(graph[a - 1][b - 1], c);
}

for (let i = 0; i < n; i++) {
  graph[i][i] = 0;
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][k] + graph[k][j] < graph[i][j]) {
        graph[i][j] = graph[i][k] + graph[k][j];
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === Infinity) {
      graph[i][j] = 0;
    }
  }
}

console.log(graph.map((v) => v.join(' ')).join('\n'));
