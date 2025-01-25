const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const arr = input.map((v) => v.split(' ').map(Number));

console.log(
  arr.reduce((prev, v) => prev + v.reduce((pre, val) => pre + val, 0), 0)
);
