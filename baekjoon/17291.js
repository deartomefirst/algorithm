const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +require('fs').readFileSync(filePath, 'utf-8').trim();

/*
기준년도 1년 2월에 1마리 탄생
1월이 되면 분열 -> 총 2배가 된다.
홀수년도에 탄생한 개체는 3번 분열시, 짝수년도에 탄생한 개체는 4번 분열시 사망한다.
N년 말에 존재하는 벌레의 수를 구하시오.

[0, 1 ]

총 갯수랑
새롭게 생성된 박테리아의 수

6의 경우


*/

const dp = [0, 1];
const newDp = [0, 1];
for (let i = 2; i <= n; i++) {
  dp[i] = 2 * dp[i - 1];
  newDp[i] = dp[i] - dp[i - 1];
  if (i - 3 > 0 && (i - 3) % 2 === 1) {
    dp[i] = dp[i] - newDp[i - 3];
  }
  if (i - 4 > 0 && (i - 4) % 2 === 0) {
    dp[i] = dp[i] - newDp[i - 4];
  }
}
console.log(dp[n]);
