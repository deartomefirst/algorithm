const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

// dp로 푸는 문제다. 이차원배열을 사용해야할듯
let max = Math.max(...arr);
const dp = Array.from({ length: max + 1 }, () => Array(11).fill(0));
let sum = 0;
for (let i = 0; i < 10; i++) {
  dp[1][i] = 1;
  sum += dp[1][i];
}
dp[1][10] = sum;

for (let i = 2; i <= max; i++) {
  let sum = 0;
  dp[i][0] = dp[i - 1][10];
  sum += dp[i][0];
  for (let j = 1; j < 10; j++) {
    dp[i][j] = dp[i][j - 1] - dp[i - 1][j - 1];
    sum += dp[i][j];
  }
  dp[i][10] = sum;
}
let answer = [];
arr.forEach((v) => {
  answer.push(dp[v][10]);
});
console.log(answer.join('\n'));
