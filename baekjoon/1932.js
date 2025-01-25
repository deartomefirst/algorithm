let [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
arr = arr.map((v) =>
  v
    .trim()
    .split(' ')
    .map((v) => +v)
);

let dp = Array.from({ length: +num + 1 }, () => Array(+num + 1).fill(0));
dp[1][1] = arr[0][0];

for (let i = 2; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + arr[i - 1][j - 1];
  }
}
let max = 0;
for (let i = 1; i <= num; i++) {
  if (max < dp[num][i]) {
    max = dp[num][i];
  }
}
console.log(max);
/*

7
3 8
10 15
8 1 0
18 16 15
2  7  4  4

20 25,23 20,19 19

*/
