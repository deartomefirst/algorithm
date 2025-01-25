const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map((v) => +v);
const arr = input.split(' ').map((v) => +v);
let count = 0;
let s = 0;
let f = 0;
let sum = arr[f];

while (f <= N - 1) {
  if (sum < M) {
    f++;
    sum += arr[f];
  } else if (sum > M) {
    sum -= arr[s];
    s++;
    if (s > f) {
      f++;
      sum += arr[f];
    }
  } else {
    count++;
    sum -= arr[s];
    s++;
    f++;
    sum += arr[f];
  }
}

console.log(count);

/*
s부터 f의 합을 구하자.
M보다 합이 작다면 f를 증가, 이때 f가 끝에 있었다면 시행 종료
M보다 합이 크다면 s를 증가
M이라면 count를 증가시키고 s와 f를 모두 증가, 이때 f가 끝에 있었다면 시행 종료


*/

/*

1 3 6 10 12 17 20 21 22 24

*/
