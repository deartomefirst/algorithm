let [num, arr] = require('fs').readFileSync('input.txt').toString().split('\n');
arr = arr.split(' ').map((v) => +v);

const dp = new Array(+num).fill(0);

for (let i = 0; i < num; i++) {
  dp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    console.log(i, j, dp);
  }
}

console.log(Math.max(...dp));
