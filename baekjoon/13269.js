const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(' ').map(Number));
}

const front = input[n + 1].split(' ').map(Number);
const right = input[n + 2].split(' ').map(Number);

function calMaxBlock() {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[j][i] !== 0) {
        if (front[i] === 0) return -1;
        graph[j][i] = front[i];
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (right[i] < graph[n - 1 - i][j]) {
        graph[n - 1 - i][j] = right[i];
      }
    }
  }

  return graph.map((v) => v.join(' ')).join('\n');
}

console.log(calMaxBlock());

/*

77퍼에서 틀렸다

주어진 데이터를 만족하지 못하는 경우 -1을 출력하는 코드가 빠져있었다.

어떤 경우를 에러로 처리할 지 코드로 작성하는 것이 중요하다.
-> 빠르게 하는게 힘들다.


*/
