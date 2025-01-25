const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [num, year] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let dp = Array(year + 1).fill(0);


dp[0] = num;

for (let i = 1; i <= year; i++) {
  let oneAgo = dp[i - 1];
  let threeAgo = dp[i - 3];
  let fiveAgo = dp[i - 5];
  if (i - 3 < 0) {
    threeAgo = 0;
    fiveAgo = 0;
  } else if (i - 5 < 0) {
    fiveAgo = 0;
  }

  dp[i] = Math.floor(Math.max(oneAgo * 1.05, threeAgo * 1.2, fiveAgo * 1.35));
}
console.log(Math.floor(dp[year]));
