const fs = require('fs');
const num = +fs.readFileSync('input.txt').toString();

const dp = { 1: 1, 2: 2 };
for (let i = 3; i <= num; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}
console.log(dp[num]);
