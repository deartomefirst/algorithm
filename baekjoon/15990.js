const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .split('\n')
  .map((v) => +v);

let dp = Array.from({ length: 100001 }, () => Array(4).fill(0));

dp[1][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;
function countSum(n) {
  const MOD = 1000000009;
  if (dp[n][1] > 0) return (dp[n][1] + dp[n][2] + dp[n][3]) % MOD;
  for (let i = 4; i <= n; i++) {
    dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
    dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
    dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
  }
  return (dp[n][1] + dp[n][2] + dp[n][3]) % MOD;
}
let result = [];
for (let i = 0; i < n; i++) {
  result.push(countSum(arr[i]));
}
console.log(result.join('\n'));
/*

끝나는 부분의 값의 갯수를 더하는 것이 중요하구나...

[1][0][0] - 1
[0][1][0] - 2
[1][1][1] - 3
[2][0][1] - 4
[1][2][1] - 5
[][][] - 6
...

1 

2 


1 + 2
2 + 1
3

1 3
1 2 1
3 1

2 3
2 1 2
3 2
1 3 1


1 2 3
2 1 3
1 3 2
1 2 1 2
3 1 2
2 3 1
2 1 2 1
3 2 1







2 1 3
1 2 3
1 2 1 2
1 3 2
3 1 2
2 3 1
3 2 1
2 1 2 1



*/
