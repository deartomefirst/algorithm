const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = +input[0];
const m = +input[1];

let graph = Array.from({ length: n }, () => Array(n).fill(Infinity));
const pathMap = Array.from({ length: n }, () => Array(n));

for (let i = 2; i < 2 + m; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  if (graph[a - 1][b - 1] > c) {
    graph[a - 1][b - 1] = c;
  }
  pathMap[a - 1][b - 1] = b - 1;
}

for (let i = 0; i < n; i++) {
  graph[i][i] = 0;
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][k] + graph[k][j] < graph[i][j]) {
        graph[i][j] = graph[i][k] + graph[k][j];
        pathMap[i][j] = pathMap[i][k];
      }
    }
  }
}
let answer = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === Infinity) {
      graph[i][j] = 0;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 0) {
      answer.push(0);
      continue;
    }
    let path = [];
    let st = i;
    while (st !== j) {
      path.push(st + 1);
      st = pathMap[st][j];
    }
    path.push(j + 1);
    answer.push([path.length, ...path].join(' '));
  }
}

console.log(graph.map((v) => v.join(' ')).join('\n'));
console.log(answer.join('\n'));
