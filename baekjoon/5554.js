const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const sum = input.reduce((pre, cur) => pre + cur, 0);
console.log(Math.floor(sum / 60) + '\n' + (sum % 60));
