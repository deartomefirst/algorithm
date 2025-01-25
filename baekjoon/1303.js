const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input.map((v) => v.split(''));
const visited = Array.from({ length: m }, () => Array(n).fill(false));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let wPower = 0;
let bPower = 0;

let temp = [];
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] === true) continue;
    temp.push([i, j]);
    visited[i][j] = true;
    let first = arr[i][j];
    let count = 1;
    while (temp.length) {
      let [x, y] = temp.pop();

      for (let k = 0; k < 4; k++) {
        let newX = x + dx[k];
        let newY = y + dy[k];

        if (newX < 0 || newY < 0 || newX >= m || newY >= n) continue;
        if (visited[newX][newY] === true || arr[newX][newY] !== first) continue;
        temp.push([newX, newY]);
        visited[newX][newY] = true;
        count++;
      }
    }
    if (first === 'W') wPower += count * count;
    if (first === 'B') bPower += count * count;
  }
}

console.log(wPower, bPower);
