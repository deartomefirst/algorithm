const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
let length = Math.min(n, m);

function sameValueSquare() {
  while (length !== 1) {
    for (let i = 0; i < n - length + 1; i++) {
      for (let j = 0; j < m - length + 1; j++) {
        let val = arr[i][j];
        if (
          val === arr[i][j + length - 1] &&
          val === arr[i + length - 1][j] &&
          val === arr[i + length - 1][j + length - 1]
        ) {
          return length * length;
        }
      }
    }
    length--;
  }
  return 1;
}
console.log(sameValueSquare());
