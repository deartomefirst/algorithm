const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input.map((v) => v.split(''));
const visited = Array.from({ length: n }, () => Array(m).fill(false));

let startX;
let startY;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === 'I') {
      [startX, startY] = [i, j];
      break;
    }
  }
}
let personCount = 0;
function bfs(x, y) {
  if (x >= n || y >= m || x < 0 || y < 0 || arr[x][y] === 'X') return;

  if (visited[x][y] === false) {
    if (arr[x][y] === 'P') {
      personCount++;
    }
    visited[x][y] = true;
    bfs(x + 1, y);
    bfs(x, y + 1);
    bfs(x - 1, y);
    bfs(x, y - 1);
  }
}
bfs(startX, startY);
console.log(personCount === 0 ? 'TT' : personCount);
/*

bfs를 실행해서 p를 몇번 만났는지 세면 된다.

3 5
OOOPO
OIOOX
OOOXP
*/
