const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const dp = new Array(N).fill(0);
let max = 0;
for (let i = 0; i < N; i++) {
  dp[i] = arr[i];
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + arr[i]);
    }
  }
  max = Math.max(max, dp[i]);
}

console.log(max);

// https://www.acmicpc.net/problem/11055 문제와 상당히 유사하다.
