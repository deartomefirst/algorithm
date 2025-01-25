const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...wines] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const dp = new Array(n).fill(0);
dp[0] = wines[0];
dp[1] = wines[0] + wines[1];
dp[2] = Math.max(wines[0] + wines[1], wines[1] + wines[2], wines[0] + wines[2]);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + wines[i],
    dp[i - 3] + wines[i] + wines[i - 1]
  );
}

console.log(dp[n - 1]);

/*


6
10
13
9
8
1

6 10 13 9 8 1

6 10 13 9 8 1


6  0
16 10
16 23
25 23
33 31
33 32


1 3

*/
