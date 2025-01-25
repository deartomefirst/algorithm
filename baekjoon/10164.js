const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, M, K] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

if (K === 0) {
  let min = Math.min(N - 1, M - 1);
  console.log(combination(N + M - 2, min));
} else {
  let [x, y] = [Math.floor((K - 1) / M), (K - 1) % M];

  let restX = N - 1 - x;
  let restY = M - 1 - y;
  console.log(
    combination(x + y, Math.min(x, y)) *
      combination(restX + restY, Math.min(restX, restY))
  );
}

function combination(n, k) {
  if (k > n) return 0;
  if (k === 0 || k === n) return 1;

  let dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, k); j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }

  return dp[n][k];
}
