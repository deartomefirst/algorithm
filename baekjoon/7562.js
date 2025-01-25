const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
// testcase
const testCase = parseInt(input.shift());
// 이동할 수 있는 방법
const dx = [1, 2, 2, 1, -1, -2, -2, -1];
const dy = [2, 1, -1, -2, -2, -1, 1, 2];

function bfs(sx, sy, n, visited, fx, fy) {
  visited[sx][sy] = 1;
  const queue = [[sx, sy]];
  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 8; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];
      if (newX < 0 || newY < 0 || newX >= n || newY >= n) continue;
      if (visited[newX][newY] !== 0) continue;
      visited[newX][newY] = visited[x][y] + 1;
      queue.push([newX, newY]);
      if (newX === fx && newY === fy) return visited[newX][newY] - 1;
    }
  }
  return 0;
}

for (let i = 0; i < testCase; i++) {
  const size = parseInt(input[i * 3]);
  const [startX, startY] = input[i * 3 + 1].split(' ').map((v) => +v);
  const [finishX, finishY] = input[i * 3 + 2].split(' ').map((v) => +v);
  const visited = Array.from({ length: size }, () => Array(size).fill(0));
  console.log(bfs(startX, startY, size, visited, finishX, finishY));
}
