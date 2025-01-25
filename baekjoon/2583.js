const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [M, N, K] = input[0].split(' ').map(Number);

const paper = Array.from({ length: M }, () => Array(N).fill(0));

for (let i = 1; i <= K; i++) {
  let [y1, x1, y2, x2] = input[i].split(' ').map(Number);

  for (let m = x1; m < x2; m++) {
    for (let n = y1; n < y2; n++) {
      paper[m][n] = 1;
    }
  }

  // 02 44
}

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let visited = Array.from({ length: M }, () => Array(N).fill(0));
let count = 0;
let answer = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (paper[i][j] === 1 || visited[i][j] === 1) continue;
    let area = 1;
    let temp = [[i, j]];
    visited[i][j] = 1;
    count++;
    while (temp.length) {
      let [x, y] = temp.pop();

      for (let k = 0; k < 4; k++) {
        let newX = x + dx[k];
        let newY = y + dy[k];

        if (newX < 0 || newY < 0 || newX >= M || newY >= N) continue;
        if (visited[newX][newY] === 1 || paper[newX][newY] === 1) continue;
        temp.push([newX, newY]);
        visited[newX][newY] = 1;
        area++;
      }
    }
    answer.push(area);
  }
}

console.log(count + '\n' + answer.sort((a, b) => a - b).join(' '));
