// const fs = require('fs');
// const num = fs.readFileSync('input.txt').toString();
const fs = require('fs');
const num = fs.readFileSync('/dev/stdin').toString().trim();
let result = 0;

for (let i = 1; i <= num.length; i++) {
  if (parseInt(+num / Math.pow(10, i) === 0)) {
    result += (+num - Math.pow(10, i - 1) + 1) * i;
  } else {
    result += (Math.pow(10, i) - Math.pow(10, i - 1)) * i;
  }
}
console.log(result);

/*

22까지

1 ~ 9 
9 - 1 + 1

22 - 10 + 1

자릿수를 구하는 가장 쉬운 방법은...?
그냥 길이를 알면 되잖아...? 

384라는 숫자가 있었다.
길이가 3이다.
10 - 1 + 100 - 10 + 384 -100 + 1
384 - 100 + 1

4


*/
// let result = 0;

// for (let i = 1; i <= num.length; i++) {
//   if (parseInt(+num / Math.pow(10, i)) === 0) {
//     result += (+num - Math.pow(10, i - 1) + 1) * i;
//     // result.push(num - Math.pow(10, i - 1) + 1);
//   } else {
//     result += (Math.pow(10, i) - Math.pow(10, i - 1)) * i;
//     // result.push(Math.pow(10, i) - Math.pow(10, i - 1));
//   }
// }

// // console.log(result.reduce((acc, current, idx) => acc + current * idx, 0));
// console.log(result);
