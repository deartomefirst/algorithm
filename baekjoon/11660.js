const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map(Number);
const arr = [];
const coords = [];

for (let i = 0; i < N + M; i++) {
  if (i < N) arr.push(input[i].split(' ').map(Number));
  else coords.push(input[i].split(' ').map(Number));
}

// 누적합을 기록하기 위한 배열
const arrSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    arrSum[i][j] =
      arrSum[i - 1][j] +
      arrSum[i][j - 1] +
      arr[i - 1][j - 1] -
      arrSum[i - 1][j - 1];
  }
}

let answer = [];

for (let i = 0; i < M; i++) {
  let [x1, y1, x2, y2] = coords[i];
  answer.push(
    arrSum[x2][y2] -
      arrSum[x1 - 1][y2] -
      arrSum[x2][y1 - 1] +
      arrSum[x1 - 1][y1 - 1]
  );
}
console.log(answer.join('\n'));

/*

왜 누적합?
구간 합을 빠르게 계산할 수 있다.


1 2 3
2 3 4
3 4 5

1  3  6
3  8  15
6  15 27

1 2 3 4
2 3 4 5 
3 4 5 6
4 5 6 7

56


*/
