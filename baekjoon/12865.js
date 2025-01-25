const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NK, ...bag] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [N, K] = NK.split(' ').map(Number);
const things = bag.map((v) => v.split(' ').map(Number));

const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  let [W, V] = things[i - 1];

  for (let j = 1; j < K + 1; j++) {
    if (W <= j) {
      dp[i][j] = Math.max(dp[i - 1][j], V + dp[i - 1][j - W]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}
console.log(dp[N][K]);

/*
어떻게 해야 사용할 것을 고를 수 있을까?
언뜻보면 greedy 문제 같다. 하지만 greedy로 해결할 수 없는 문제다.

내가 생각한 방법
N까지 

3부터 7까지의 값을 구해보자
3일 때는 가치의 값이 큰 걸 선택
4일 때는 
5일 때
6일 때 
7일 때는 3+4로 만들 수 있다.





*/
