const arr = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

const mid = arr.sort((a, b) => a - b)[2];
const average = parseInt(arr.reduce((acc, cur) => acc + cur, 0) / 5);
console.log(average + '\n' + mid);
/*

중앙값을 어떻게 구할까...?
5개의 값이 주어진다.
100보다 작은 10의 배수이다.

배정밀도의 계산 과정에서 소수점이 나오지 않게 하기 위해서는 어떤 연산을 중간에 넣어야할까?
parseInt, Math.floor, ceil 같은 것을 사용해야 하지 않을까?

*/
