const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const num = parseInt(N);
const board = arr.map((v) => v.trim().split(''));
let visited = Array.from({ length: num }, () =>
  Array(parseInt(num)).fill(false)
);
let queue = [];
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function bfs(x, y) {
  const value = board[x][y];
  visited[x][y] = true;
  queue.push([x, y]);
  while (queue.length) {
    const [nowX, nowY] = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
      const newX = nowX + dx[dir];
      const newY = nowY + dy[dir];
      if (newX < 0 || newX >= num || newY < 0 || newY >= num) continue;
      if (visited[newX][newY] || board[newX][newY] !== value) continue;
      visited[newX][newY] = true;
      queue.push([newX, newY]);
    }
  }
}

let area = 0;

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (!visited[i][j]) {
      bfs(i, j);
      area++;
    }
  }
}
// 방문 초기화
visited = Array.from({ length: num }, () => Array(parseInt(num)).fill(false));
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (board[i][j] === 'G') {
      board[i][j] = 'R';
    }
  }
}
queue = [];
let blueArea = 0;
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (!visited[i][j]) {
      bfs(i, j);
      blueArea++;
    }
  }
}

console.log(area, blueArea);

// function blueBfs(x, y) {
//   const value = board[x][y];

//   visited[x][y] = true;
//   queue.push([x, y]);
//   while (queue.length) {
//     const [nowX, nowY] = queue.shift();
//     for (let dir = 0; dir < 4; dir++) {
//       const newX = nowX + dx[dir];
//       const newY = nowY + dy[dir];
//       if (newX < 0 || newX >= num || newY < 0 || newY >= num) continue;
//       if (visited[newX][newY] || board[newX][newY] === 'B') continue;
//       visited[newX][newY] = true;
//       queue.push([newX, newY]);
//     }
//   }
// }
