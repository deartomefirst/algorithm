const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);
const M = +input[2];

const dp = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  dp[i][i] = true;
}

for (let i = 0; i < N - 1; i++) {
  if (arr[i] === arr[i + 1]) {
    dp[i][i + 1] = true;
  }
}
for (let len = 3; len <= N; len++) {
  for (let i = 0; i <= N - len; i++) {
    const j = i + len - 1;
    if (arr[i] === arr[j] && dp[i + 1][j - 1]) {
      dp[i][j] = true;
    }
  }
}
const answer = [];
for (let i = 3; i < 3 + M; i++) {
  let [n, m] = input[i].split(' ').map(Number);
  answer.push(dp[n - 1][m - 1] === true ? 1 : 0);
}
console.log(answer.join('\n'));
