const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);

let dp = [0, 1, 2, 4];
let maxValue = Math.max(...arr);
for (let i = 4; i <= maxValue; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
}
for (let i = 0; i < num; i++) {
  console.log(dp[arr[i]]);
}
