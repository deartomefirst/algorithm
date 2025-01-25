const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

let red = [0];
let green = [0];
let blue = [0];

let num = +input[0];

for (let i = 1; i <= num; i++) {
  [red[i], green[i], blue[i]] = input[i].split(' ').map((v) => +v);
}

const dp = Array.from(new Array(1001), () => new Array(3).fill(0));
dp[1][0] = red[1];
dp[1][1] = green[1];
dp[1][2] = blue[1];
for (let i = 2; i <= num; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + red[i];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + green[i];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + blue[i];
}
console.log(Math.min(dp[num][0], dp[num][1], dp[num][2]));
