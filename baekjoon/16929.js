const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
const arr = input.map((v) => v.split(''));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
function dfs() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let temp = [[i, j, 1]];
      const visited = Array.from({ length: n }, () => Array(m).fill(false));
      while (temp.length !== 0) {
        let [x, y, visitiedNum] = temp.pop();
        visited[x][y] = true;
        for (let k = 0; k < 4; k++) {
          const newX = x + dx[k];
          const newY = y + dy[k];
          if (newX < 0 || newY < 0 || newX >= n || newY >= m) continue;
          if (arr[newX][newY] !== arr[i][j]) continue;
          if (visited[newX][newY] === true) {
            if (newX === i && newY === j && visitiedNum >= 4) return 'Yes';
            continue;
          }
          temp.push([newX, newY, visitiedNum + 1]);
        }
      }
    }
  }
  return 'No';
}
console.log(dfs());

/*
dfs(x,y,lastDirection)


*/
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
//     let startX = i;
//     let startY = j;
//     if (dfs(i, j, 1) === 'Yes') {
//     }
//   }
// }

// function dfs(x, y, num) {
//   if (x < 0 || y < 0 || x >= n || y >= m) return;
//   if (arr[x][y] !== startChar) return;
//   if (visited[x][y] === true) {
//     if (x === startX && y === startY && num >= 4) return 'Yes';
//     return;
//   }
//   visited[x][y] = true;

//   dfs(x + 1, y, num + 1);
//   dfs(x, y + 1, num + 1);
//   dfs(x - 1, y, num + 1);
//   dfs(x, y - 1, num + 1);
//   return 'No';
// }
