const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);
console.log(
  Math.min(input[0], input[1], input[2]) + Math.min(input[3], input[4]) - 50
);
