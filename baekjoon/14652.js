const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, M, K] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

console.log(Math.floor(K / M), K % M);

/*

k / N+1 

*/
