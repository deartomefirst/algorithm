const [num, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split('\n')
  .map((v) => +v);

/*

dp[1] = 1;
dp[2] = dp[1] + 1;
dp[3] = dp[1] + dp[2] + 1;
dp[4] = dp[1] + dp[2] + dp[3];



*/

let dp = Array(11).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 11; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

let result = [];
for (let i = 0; i < num; i++) {
  result.push(dp[arr[i]]);
}
console.log(result.join('\n'));
