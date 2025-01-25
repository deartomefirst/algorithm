/*

세 개의 수를 비교할 것이다.

무조건 3번의 비교를 해야하나?

운이 좋으면 2번
아니면 3번



*/

const [a, b, c] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);
const max = Math.max(a, b, c);
const min = Math.min(a, b, c);

console.log(`${min} ${a + b + c - min - max} ${max}`);
