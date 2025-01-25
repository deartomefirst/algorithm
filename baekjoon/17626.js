const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const num = +require('fs').readFileSync(filePath, 'utf-8').trim();

const dp = [0, 1, 2, 3, 1];

for (let i = 5; i <= num; i++) {
  dp[i] = dp[i - 1] + 1;
  for (let j = 2; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}
console.log(dp[num]);
