/*

되도록이면 const를 사용하자.
나도 모르는 에러를 막을 수 있다.

*/

const [num, arr, target] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
let count = 0;
const numArr = arr
  .trim()
  .split(' ')
  .map((v) => +v);
for (let i = 0; i < +num; i++) {
  if (numArr[i] === +target) count++;
}
console.log(count);
