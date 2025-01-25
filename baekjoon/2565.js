const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const N = Number(n);
const lines = arr
  .map((v) => v.split(' ').map(Number))
  .sort((a, b) => a[0] - b[0]);
const dp = Array(N).fill(1);
let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (lines[i][1] > lines[j][1] && dp[i] > dp[j] + 1) {
      dp[i] = dp[j] + 1;
    }
  }
  if (max < dp[i]) {
    max = dp[i];
  }
}
console.log(N - max);
/*

00 
11
22
33
44
53
62
71
80


12 34 56 78 910 1112 1314 1516





*/
