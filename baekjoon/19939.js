const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, K] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let remainBalls = N - (K * (K + 1)) / 2;

if (remainBalls < 0) {
  console.log(-1);
} else if (remainBalls === 0) {
  console.log(K - 1);
} else {
  if (remainBalls % K === 0) {
    console.log(K - 1);
  } else {
    console.log(K);
  }
}

/*

  1 2 7
  1 3 6
  2 3 5

  1 2 3

  k(k+1)/2 보다 작으면 x => -1
  
  7이면
  K + (N-K(K+1)/2)/2

  8이면
  1 2 5
  1 3 4
  9이면
  1 2 6
  1 3 5
  2 3 4

  11
  1 2 3 5

  12
  1 2 3 6
  1 2 4 5

  13
  1 2 3 7
  1 2 4 6
  1 3 4 5
  
  14는 되어야 가능하다
  1 2 3 8
  1 2 4 7
  1 3 4 6
  2 3 4 5

  1 2 3 9
  1 2 4 8
  1 3 4 7
  2 3 4 6

  1 2 3 10
  1 2 4 9
  1 3 4 8
  2 3 4 7
  2 3 5 6

  담긴 바구니마다 갯수가 달라야 함
  가장 적게 담긴 바구니와 가장 많이 담긴 바구니의 차이가 최소가 되도록
  그 차이를 출력

  나눠 담을 수 없음면 -1을 출력


  */
