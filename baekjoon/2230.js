/*

1
5
3

*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [input, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [N, M] = input.split(' ').map((v) => +v);
const numArr = arr.map((v) => +v).sort((a, b) => a - b);

let left = 0;
let right = N - 1;

while (left < right) {}
