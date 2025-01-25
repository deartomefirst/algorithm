const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [K, N] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let answer = N === 1 ? -1 : Math.ceil(K / (N - 1)) + K;
console.log(answer);

// 단순 수학으로 풀면 BigInt에 걸려서 안된다.

/*

36 6

36/5 8

6


*/
