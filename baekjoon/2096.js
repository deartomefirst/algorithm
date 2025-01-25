const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const arr = input.map((v) => v.split(' ').map(Number));
const dp = Array.from({ length: +n + 1 }, () =>
  Array.from({ length: 3 }, () => Array(2).fill(0))
);

for (let i = 1; i <= n; i++) {
  // max
  dp[i][0][0] = Math.max(dp[i - 1][0][0], dp[i - 1][1][0]) + arr[i - 1][0];
  dp[i][0][1] = Math.min(dp[i - 1][0][1], dp[i - 1][1][1]) + arr[i - 1][0];
  dp[i][1][0] =
    Math.max(dp[i - 1][0][0], dp[i - 1][1][0], dp[i - 1][2][0]) +
    +arr[i - 1][1];
  dp[i][1][1] =
    Math.min(dp[i - 1][0][1], dp[i - 1][1][1], dp[i - 1][2][1]) +
    +arr[i - 1][1];
  dp[i][2][0] = Math.max(dp[i - 1][1][0], dp[i - 1][2][0]) + arr[i - 1][2];
  dp[i][2][1] = Math.min(dp[i - 1][1][1], dp[i - 1][2][1]) + arr[i - 1][2];
}

console.log(
  Math.max(dp[+n][0][0], dp[+n][1][0], dp[+n][2][0]),
  Math.min(dp[+n][0][1], dp[+n][1][1], dp[+n][2][1])
);
/*
가장 큰 

*/
