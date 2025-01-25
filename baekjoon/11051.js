const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, K] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

// 이항계수를 계산하시오! 10007로 나눌 것이다.
/*

N! / K!*(N-K)!
N부터 N-k+1까지의 곱을 K!로 나누면 끝!

이항계수는 문제가 쪼개질 수 있다.

nCk = n-1Ck + n-1Ck-1

0 0 0 0 
1 1 0 0
1 2 1 0
1 3 3 1

*/
let minK = Math.min(K, N - K);
let dp = Array.from({ length: N + 1 }, () => Array(minK + 1).fill(0));
for (let i = 1; i <= N; i++) {
  dp[i][0] = 1;
}

if (minK === 0) {
  console.log(1);
} else if (minK === 1) {
  console.log(N);
} else {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= minK; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - 1]) % 10007;
      }
    }
  }
  console.log(dp[N][minK]);
}
