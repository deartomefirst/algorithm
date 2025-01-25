/* 반복되는   */
const fs = require('fs');
const num = +fs.readFileSync('input.txt').toString();

const dp = new Array(num + 1).fill(0);
dp[2] = 1;
dp[3] = 1;
for (let i = 4; i <= num; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
}
console.log(dp[num]);
// 왜 틀렸는지 이해가 안간다.
// 1을 제외했다...
