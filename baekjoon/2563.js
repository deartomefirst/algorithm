const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let board = Array.from({ length: 100 }, () => Array(100).fill(0));
let blackArea = 0;
for (let i = 0; i < +n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  for (let m = x; m < x + 10; m++) {
    for (let n = y; n < y + 10; n++) {
      if (board[m][n] === 0) {
        board[m][n] = 1;
        blackArea++;
      }
    }
  }
}

console.log(blackArea);
