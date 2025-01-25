const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = Number(input[0]);
const cars = input[1].split(' ').map(Number);
const useNum = Number(input[2]);

const sum = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  sum[i] = sum[i - 1] + cars[i - 1];
}

const dp = Array.from({ length: 4 }, () => Array(n + 1).fill(0));

for (let k = 1; k <= 3; k++) {
  for (let i = k * useNum; i <= n; i++) {
    dp[k][i] = Math.max(
      dp[k][i - 1],
      dp[k - 1][i - useNum] + sum[i] - sum[i - useNum]
    );
  }
}
console.log(dp[3][n]);

// 순열 문제일 것 같다.
/*
3개를 선택하는데 선택할 수 있는 조건들을 사용해서 최댓값을 구하자.



js의 변수는 다른 언어들보다 용량이 큰 편이다.
데이터 영역으로 돌릴 필요가 있다.



*/
