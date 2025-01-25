const fs = require('fs');
const num = +fs.readFileSync('input.txt').toString();

const dp = new Array(num + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for (let i = 4; i <= num; i++) {
  dp[i] = dp[i - 1] + 1;
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    console.log(dp);
  }
}

console.log(dp[num]);
