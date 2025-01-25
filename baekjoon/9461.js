const filePath = process.platform === 'linux' ? '/stdin/dev' : 'input.txt';
const [testCase, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);

const dp = [1, 1, 1, 2, 2];
for (let i = 0; i < testCase; i++) {
  if (dp[input[i] - 1]) {
    console.log(dp[input[i] - 1]);
    continue;
  }
  for (let j = 5; j <= input[i]; j++) {
    dp[j] = dp[j - 1] + dp[j - 5];
  }
  console.log(dp[input[i] - 1]);
}
