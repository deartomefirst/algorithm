const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [size, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const maze = arr.map((v) => v.split(''));
const [col, row] = size.split(' ').map(Number);

const jihoon = Array.from({ length: col }, () => Array(row).fill(0));
const fire = Array.from({ length: col }, () => Array(row).fill(0));

let fQueue = [];
let jQueue = [];

for (let i = 0; i < col; i++) {
  for (let j = 0; j < row; j++) {
    if (maze[i][j] === 'J') {
      jQueue.push([i, j]);
      jihoon[i][j] = 1;
    }
    if (maze[i][j] === 'F') {
      fQueue.push([i, j]);
      fire[i][j] = 1;
    }
  }
}
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let fIndex = 0;
while (fQueue.length > fIndex) {
  let [fx, fy] = fQueue[fIndex++];
  for (let i = 0; i < 4; i++) {
    let newFx = fx + dx[i];
    let newFy = fy + dy[i];
    if (newFx < 0 || newFy < 0 || newFx >= col || newFy >= row) continue;
    if (maze[newFx][newFy] === '#' || fire[newFx][newFy] > 0) continue;
    fire[newFx][newFy] = fire[fx][fy] + 1;
    fQueue.push([newFx, newFy]);
  }
}
let jIndex = 0;
while (jQueue.length > jIndex) {
  let [jx, jy] = jQueue[jIndex++];
  for (let i = 0; i < 4; i++) {
    let newJx = jx + dx[i];
    let newJy = jy + dy[i];
    if (newJx < 0 || newJy < 0 || newJx >= col || newJy >= row) continue;
    if (maze[newJx][newJy] === '#' || jihoon[newJx][newJy] > 0) continue;
    jihoon[newJx][newJy] = jihoon[jx][jy] + 1;
    jQueue.push([newJx, newJy]);
  }
}
let min = col * row;
for (let i = 0; i < col; i++) {
  for (let j = 0; j < row; j++) {
    if (i === 0 || i === col - 1 || j === 0 || j === row - 1) {
      if (fire[i][j] === 0 && jihoon[i][j] > 0) {
        min = Math.min(jihoon[i][j], min);
      } else if (fire[i][j] !== 0 && jihoon[i][j] < fire[i][j]) {
        min = Math.min(jihoon[i][j], min);
      }
    }
  }
}
console.log(min === col * row ? 'IMPOSSIBLE' : min);
