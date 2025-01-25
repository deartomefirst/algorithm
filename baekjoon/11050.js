const [n, k] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split(' ')
  .map((v) => +v);
let result = 1;
for (let i = n; i > n - k; i--) {
  result = (result * i) / (n + 1 - i);
}
console.log(result);

/*

소수의 계산할 때
부동 소수점을 유의하자.

*/
