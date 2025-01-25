const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +require('fs').readFileSync(filePath, 'utf-8').trim();

const dp = [1, 1, 0, 1, 1];

for (let i = 5; i <= n; i++) {
  dp[i] = Math.min(dp[i - 1], dp[i - 3], dp[i - 4]) === 1 ? 0 : 1;
}

console.log(dp[n] ? 'SK' : 'CY');

/*

6의 경우
결국 나머지가 2가 되게끔 만들면 이긴다.

dp

7의 경우


*/
