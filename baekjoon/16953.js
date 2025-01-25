const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [A, B] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

// let calcArr = Array(B + 1).fill(0);
// calcArr[A] = 1;

// for (let i = A + 1; i <= B; i++) {
//   if (i % 2 === 0 && calcArr[i / 2] !== 0) {
//     calcArr[i] = calcArr[i / 2] + 1;
//   } else if (i % 10 === 1 && calcArr[(i - 1) / 10] !== 0) {
//     calcArr[i] = calcArr[(i - 1) / 10] + 1;
//   }
// }
// console.log(calcArr[B] === 0 ? -1 : calcArr[B]);

let now = B;
let calc = 1;
while (now > A) {
  if (now % 2 === 0) {
    now = now / 2;
    calc += 1;
  } else if (now % 10 === 1) {
    now = (now - 1) / 10;
    calc += 1;
  } else {
    calc = -1;
    break;
  }
}
console.log(now !== A ? -1 : calc);

// 42 21 2
