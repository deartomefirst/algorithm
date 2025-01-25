const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));
for (let i = 0; i <= n; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= k; i++) {
  for (let j = 0; j <= n; j++) {
    for (let m = 0; m <= j; m++) {
      dp[i][j] = (dp[i][j] + dp[i - 1][m]) % 1000000000;
    }
  }
}
console.log(dp[k][n]);

/*
K개를 더해서 합이 N이 되는 경우

6 4
6까지의 정수 4개를 더해서 합이 6이 되는 경우의 수를 구하는 프로그램
i, j-끝자리가 j인 것
개수1 1 1  1  1  1  1  1
개수2 1 2  3  4  5  6  7 
개수3 1 3  6 10 15 21 28          
개수4 1 4 10 20 35 56 84               
           
           
규칙을 찾다보면 조합의 값이 된다!
*/
