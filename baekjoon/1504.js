const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [N, E] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N }, () => Array(N).fill(Infinity));

for (let i = 1; i <= E; i++) {
  let [a, b, w] = input[i].split(' ').map(Number);
  graph[a - 1][b - 1] = w;
  graph[b - 1][a - 1] = w;
}

for (let i = 0; i < N; i++) {
  graph[i][i] = 0;
}

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][k] + graph[k][j] < graph[i][j]) {
        graph[i][j] = graph[i][k] + graph[k][j];
      }
    }
  }
}
console.log(graph);

const [a, b] = input[E + 1].split(' ').map(Number);
const minLength = Math.min(
  graph[0][a - 1] + graph[a - 1][b - 1] + graph[b - 1][N - 1],
  graph[0][b - 1] + graph[b - 1][a - 1] + graph[a - 1][N - 1]
);

console.log(minLength === Infinity ? -1 : minLength);

[
  [0, 3, 5, 4],
  [3, 0, 3, 4],
  [5, 3, 0, 1],
  [4, 4, 1, 0],
];

/*
1번에서 N까지 이동할 때,
두 정점을 반드시 거치면서 최단경로로 이동하는 프로그램 작성하시오.

1 - 2 - 3 - 4
1 - 3 - 2 - 4

플로이드로 해결했는데 
다익스트라로 하는게 나았을 듯


*/
