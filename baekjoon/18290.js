const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nmk, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m, k] = nmk.split(' ').map(Number);
const scoreBoard = input.map((v) => v.split(' ').map(Number));

let isUsed = Array.from({ length: n }, () => Array(m).fill(false));
let max = -40000;

function backtrack(count, sum) {
  if (count === k) {
    if (sum > max) {
      max = sum;
    }
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!isUsed[i][j] && !isAdjacent(i, j)) {
        isUsed[i][j] = true;
        backtrack(count + 1, sum + scoreBoard[i][j]);
        isUsed[i][j] = false;
      }
    }
  }
}
backtrack(0, 0);
console.log(max);

function isAdjacent(i, j) {
  return (
    (i - 1 >= 0 && isUsed[i - 1][j]) ||
    (i + 1 < n && isUsed[i + 1][j]) ||
    (j - 1 >= 0 && isUsed[i][j - 1]) ||
    (j + 1 < m && isUsed[i][j + 1])
  );
}
