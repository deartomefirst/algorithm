const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];
const cards = input[1].split(' ').map(Number);

const dp = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
  }
}
console.log(dp[n]);

// 관점을 바꿔보자
// 원래는 dp에 총 갯수를 넣어서 계산하려고 했다.
// dp에는 i에 해당하는 카드로 계산할 수 있는 최대를 구하려고 했다.
