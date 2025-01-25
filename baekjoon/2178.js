let [input, ...matrix] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

const [n, m] = input
  .trim()
  .split(' ')
  .map((v) => +v);
matrix = matrix.map((v) => [...v.trim()].map((v) => +v));

// 방문 여부를 확인하기 위한 2차 행렬
const visited = [];
for (let i = 0; i < n; i++) {
  visited.push(Array(m).fill(0));
}

// 상하좌우
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let queue = [];
queue.push([0, 0]);
visited[0][0] = 1;
while (queue.length) {
  const [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    let newX = x + dx[i];
    let newY = y + dy[i];
    if (newX < 0 || newX >= n || newY < 0 || newY >= m) continue;
    console.log(
      newX,
      newY,
      !visited[newX][newY],
      matrix[newX][newY],
      !visited[newX][newY] && matrix[newX][newY]
    );
    if (!visited[newX][newY] && matrix[newX][newY]) {
      visited[newX][newY] = visited[x][y] + 1;
      queue.push([newX, newY]);
    }
  }
}

console.log(visited[n - 1][m - 1]);
