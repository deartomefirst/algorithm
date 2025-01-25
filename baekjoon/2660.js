const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = Number(input[0]);
const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(51));
for (let i = 1; i <= input.length - 2; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a][b] = 1;
  graph[b][a] = 1;
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      if (graph[i][k] + graph[k][j] < graph[i][j]) {
        graph[i][j] = graph[i][k] + graph[k][j];
      }
    }
  }
}

let result = Array(n + 1).fill(0);
let min = 51;
let answer = [];
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (graph[i][j] !== 51) {
      if (graph[i][j] > result[i]) {
        result[i] = graph[i][j];
      }
    }
  }
  if (result[i] < min) {
    answer = [i];
    min = result[i];
  } else if (result[i] === min) {
    answer.push(i);
  }
}
console.log(min, answer.length);
console.log(answer.join(' '));
