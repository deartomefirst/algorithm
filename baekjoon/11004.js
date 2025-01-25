const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, k], arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

console.log(arr.sort((a, b) => a - b)[k - 1]);
