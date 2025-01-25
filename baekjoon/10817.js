const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const arr = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

console.log(arr.sort((a, b) => a - b)[1]);
