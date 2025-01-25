const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

for (let i = 0; i < +T; i++) {
  const length = +input[3 * i];
  const arr = [
    input[3 * i + 1].split(' ').map(Number),
    input[3 * i + 2].split(' ').map(Number),
  ];

  const dp = Array.from({ length: 2 }, () => Array(length).fill(0));

  dp[0][0] = arr[0][0];
  dp[1][0] = arr[1][0];

  for (let i = 1; i < length; i++) {
    if (i >= 2) {
      dp[0][i] = Math.max(dp[1][i - 1] + arr[0][i], dp[1][i - 2] + arr[0][i]);
      dp[1][i] = Math.max(dp[0][i - 1] + arr[1][i], dp[0][i - 2] + arr[1][i]);
    } else {
      dp[0][i] = dp[1][i - 1] + arr[0][i];
      dp[1][i] = dp[0][i - 1] + arr[1][i];
    }
  }
  console.log(
    dp[0][length - 1] >= dp[1][length - 1]
      ? dp[0][length - 1]
      : dp[1][length - 1]
  );
}

// index를 신경쓰지 않도록 미리 값을 넣어주자.
