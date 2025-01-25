const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = parseInt(require('fs').readFileSync(filePath, 'utf-8'));

let dp = Array.from({ length: 101 }, () => Array(10).fill(0));
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function solution(n) {
  if (dp[n][9] > 0) return dp[n];
  for (let i = 2; i <= n; i++) {
    dp[i][0] = dp[i - 1][1];
    for (let j = 1; j < 9; j++) {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
    dp[i][9] = dp[i - 1][8];
  }
  return dp[n];
}

console.log(solution(n).reduce((prev, cur) => (prev + cur) % 1000000000, 0));
/*

1 -> 9

2 -> 

12
23
34
45
56
78
89

98
87
76
65
54
43
32
21
10


12 13 0224 
23 24 13
.. 
89 8  79
15개

98 79 688
...
10 1  2
17개
32개

898
101 02

8 * 2

17
15 * 2





*/
