const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = +input[0];
const hpArr = input[1].split(' ').map(Number);
const joyArr = input[2].split(' ').map(Number);

const dp = Array.from({ length: N + 1 }, () => Array(100).fill(0));

for (let i = 1; i < N + 1; i++) {
  let hp = hpArr[i - 1];
  let joy = joyArr[i - 1];

  for (let j = 1; j < 100; j++) {
    if (hp <= j) {
      dp[i][j] = Math.max(dp[i - 1][j], joy + dp[i - 1][j - hp]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}

console.log(dp[N][99]);
