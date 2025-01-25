const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input.map((v) => v.split(' ').map(Number));
const dp = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => Array(3).fill(0))
);

arr[0].forEach((v, i) => {
  dp[0][i] = new Array(3).fill(v);
});
dp[0][0][0] = 0;
dp[0][m - 1][2] = 0;

for (let i = 1; i < n; i++) {
  dp[i][0][1] = arr[i][0] + dp[i - 1][0][2];
  dp[i][0][2] = arr[i][0] + Math.min(dp[i - 1][1][0], dp[i - 1][1][1]);

  for (let j = 1; j < m - 1; j++) {
    const value = arr[i][j];
    dp[i][j][0] = value + Math.min(dp[i - 1][j - 1][1], dp[i - 1][j - 1][2]);
    dp[i][j][1] = value + Math.min(dp[i - 1][j][0], dp[i - 1][j][2]);
    dp[i][j][2] = value + Math.min(dp[i - 1][j + 1][0], dp[i - 1][j + 1][1]);
  }

  dp[i][m - 1][0] =
    arr[i][m - 1] + Math.min(dp[i - 1][m - 2][1], dp[i - 1][m - 2][2]);
  dp[i][m - 1][1] = arr[i][m - 1] + dp[i - 1][m - 1][0];
}
console.log(Math.min(...dp[n - 1].flat().slice(1, -1)));
//

/*

아래로 내려갈 때
전에 움직인 방향으로 움직인 것을 어떻게 처리할까?

5  8  5  1
8 10  9  5



*/
