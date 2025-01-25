const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);

const visited = Array.from({ length: n }, () => Array(m).fill(-1));
const arr = input.map((v) => v.split(' ').map(Number));

let startX, startY;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === 2) {
      startX = i;
      startY = j;
      break;
    }
  }
  if (startX) break;
}

let temp = [[startX, startY]];
visited[startX][startY] = 0;
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let index = 0;

while (index < temp.length) {
  let [x, y] = temp[index++];

  for (let i = 0; i < 4; i++) {
    let newX = x + dx[i];
    let newY = y + dy[i];

    if (newX < 0 || newY < 0 || newX >= n || newY >= m) continue;
    if (visited[newX][newY] !== -1 || arr[newX][newY] === 0) continue;

    temp.push([newX, newY]);
    visited[newX][newY] = visited[x][y] + 1;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === 0 && visited[i][j] === -1) {
      visited[i][j] = 0;
    }
  }
}

console.log(visited.map((v) => v.join(' ')).join('\n'));
