const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [first, second] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const m = first.length;
const n = second.length;
const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= n; j++) {
    if (first[i - 1] === second[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}
console.log(dp[m][n]);
/*
어떻게 문제를 해결할까...

0 1 

0 0 0 0 0 0 0
0 
0
0
0
0
0


acaykp


capcak



  */
