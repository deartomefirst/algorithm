const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [hw, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [h, w] = hw;

const arr1 = input.slice(0, h);
const arr2 = input.slice(h);

const diff = Array.from({ length: h }, () => Array(w).fill(0));

for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    diff[i][j] = Math.pow(arr1[i][j] - arr2[i][j], 2);
  }
}

const dp = Array.from({ length: h }, () => Array(w).fill(0));
for (let i = 0; i < w; i++) {
  dp[0][i] = diff[0][i];
}

for (let i = 1; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (j - 1 < 0 && j + 1 >= w) {
      dp[i][j] = dp[i - 1][j] + diff[i][j];
    } else if (j + 1 >= w) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + diff[i][j];
    } else if (j - 1 < 0) {
      dp[i][j] = Math.min(dp[i - 1][j + 1], dp[i - 1][j]) + diff[i][j];
    } else {
      dp[i][j] =
        Math.min(dp[i - 1][j + 1], dp[i - 1][j], dp[i - 1][j - 1]) + diff[i][j];
    }
  }
}
console.log(Math.min(...dp[h - 1]));
