const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +require('fs').readFileSync(filePath, 'utf-8').trim();

const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));
for (let i = 0; i <= 9; i++) {
  dp[1][i] = 1;
}
for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = j; k <= 9; k++) {
      dp[i][j] = (dp[i][j] + dp[i - 1][k]) % 10007;
    }
  }
}
console.log(dp);
console.log(dp[n].reduce((prev, cur) => (prev + cur) % 10007, 0));

/*
00 01 ... 09
10 11
00 01 02 
11 19 9 
22 29 8
33 39 7
99    1


[0, 10, 55, ]
1자리는 10개

0
1 -> 9개 
2 -> 8개

9 -> 1개

55개 중에서 끝나는 숫자가 
1 -> 1개 -> 1*9개
2 -> 2개 -> 2*8개
9 -> 9개 -> 9*1개

1 11 111~119

  19 199

2 22 222~229
  23

  29 299



9 99
*/
