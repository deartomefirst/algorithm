const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
for (let i = 1; i <= m; i++) {
  const [from, to] = input[i].split(' ').map(Number);
  graph[from][to] = 1;
}

for (let i = 1; i <= n; i++) {
  graph[i][i] = 0;
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (graph[i][k] !== 0 && graph[k][j] !== 0) {
        graph[i][j] = 1;
      }
    }
  }
}
let answer = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (graph[i][j] === 1) {
      answer[i]++;
      answer[j]++;
    }
  }
}
console.log(answer.filter((v) => v === n - 1).length);

/*

1 2 3 4 5 6
0   0   1

union
find

*/
