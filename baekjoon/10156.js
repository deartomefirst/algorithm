const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [K, N, M] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

console.log(M - K * N >= 0 ? 0 : K * N - M);
