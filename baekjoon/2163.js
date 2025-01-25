const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, M] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

console.log(N * M - 1);
