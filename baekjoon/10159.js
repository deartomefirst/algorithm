const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = +input[0];
const m = +input[1];

const graph1 = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
const graph2 = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j) {
      graph1[i][j] = 0;
      graph2[i][j] = 0;
    }
  }
}

for (let i = 2; i < 2 + m; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  graph1[a][b] = 1;
  graph2[b][a] = 1;
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      graph1[i][j] = Math.min(graph1[i][j], graph1[i][k] + graph1[k][j]);
      graph2[i][j] = Math.min(graph2[i][j], graph2[i][k] + graph2[k][j]);
    }
  }
}

let answer = [];
for (let i = 1; i <= n; i++) {
  let count = 0;
  for (let j = 1; j <= n; j++) {
    if (i === j) continue;
    if (graph1[i][j] === Infinity && graph2[i][j] === Infinity) count++;
  }
  answer.push(count);
}
console.log(answer.join('\n'));
