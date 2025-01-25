const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const dp = [0, ...arr];
for (let i = 2; i <= n; i++) {
  for (let j = 1; j <= i - 1 && i - j >= j; j++) {
    dp[i] = Math.min(dp[i], dp[j] + dp[i - j]);
  }
}
console.log(dp[n]);
