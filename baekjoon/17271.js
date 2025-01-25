const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N,M] = require('fs').readFileSync(filePath, 'utf-8').trim().split(' ').map(Number);

const dp = Array(M).fill(1);
dp[0] = 0;
dp[M] = 2;

for (let i = M+1; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - M])%1000000007;
}
console.log(dp[N])