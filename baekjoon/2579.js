const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);

let dp = Array.from({ length: 301 }, () => [0, 0, 0]);
dp[1][1] = arr[0];
dp[1][2] = 0;
dp[2][1] = arr[1];
dp[2][2] = arr[0] + arr[1];

for (let i = 3; i <= num; i++) {
  dp[i][1] = Math.max(dp[i - 2][1], dp[i - 2][2]) + arr[i - 1];
  dp[i][2] = dp[i - 1][1] + arr[i - 1];
}

console.log(Math.max(dp[num][1], dp[num][2]));
/*

0 10 0
0 20 30
0 25 35
0 55 50
0 45 65
0 75 65


*/
