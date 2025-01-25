const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nk, input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, K] = nk.split(' ').map(Number);
console.log(
  input
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a)[K - 1]
);


