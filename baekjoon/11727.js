const fs = require('fs');
const num = +fs.readFileSync('input.txt').toString();

const dp = { 1: 1, 2: 3 };

function fib(n) {
  if (dp[n] !== undefined) {
    return dp[n];
  }
  dp[n] = (fib(n - 1) + 2 * fib(n - 2)) % 10007;
  return dp[n];
}
console.log(fib(num));
