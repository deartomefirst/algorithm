const fs = require('fs');
const [n, m] = fs
  .readFileSync('input.txt')
  .toString()
  .split(' ')
  .map((v) => +v);

/*

13부터 25

*/
// let count5 = 0;
// let count2 = 0;
// for (let i = n - m; i <= n; i++) {
//   let temp = i;
//   while (!(temp % 5)) {
//     count5 += 1;
//     temp /= 5;
//   }
//   while (!(temp % 2)) {
//     count2 += 1;
//     temp /= 2;
//   }
// }
// for (let i = 2; i <= n - m; i++) {
//   let temp = i;
//   while (!(temp % 5)) {
//     count5 -= 1;
//     temp /= 5;
//   }
//   while (!(temp % 2)) {
//     count2 -= 1;
//     temp /= 2;
//   }
// }

function getPowerNum(num, power) {
  let count = 0;
  while (num >= power) {
    count += Math.floor(num / power);
    num /= power;
  }
  return count;
}

const two = getPowerNum(n, 2) - getPowerNum(n - m, 2) - getPowerNum(m, 2);
const five = getPowerNum(n, 5) - getPowerNum(n - m, 5) - getPowerNum(m, 5);

console.log(Math.min(two, five));
