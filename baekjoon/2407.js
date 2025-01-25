const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, M] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let small = Math.min(M, N - M);

let result = 1n;

for (let i = N; i > N - small; i--) {
  result = result * BigInt(i);
}

for (let i = small; i > 1; i--) {
  result /= BigInt(i);
}

console.log(result.toString());
/*

4C2

43
21


*/
