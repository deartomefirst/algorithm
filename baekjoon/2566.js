const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let max = 0;
let maxIdx = [1, 1];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] > max) {
      max = input[i][j];
      maxIdx[0] = i + 1;
      maxIdx[1] = j + 1;
    }
  }
}

console.log(max + '\n' + maxIdx.join(' '));
