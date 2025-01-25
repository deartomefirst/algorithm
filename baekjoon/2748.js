const num = +require('fs').readFileSync('input.txt', 'utf-8').trim();

let dp = [0, 1, 1];

for (let i = 3; i <= num; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}
console.log(String(dp[num]));
