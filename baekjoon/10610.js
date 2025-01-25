const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim();

const arr = [...input].map((v) => +v).sort((a, b) => b - a);

const sum = arr.reduce((prev, cur) => prev + cur, 0);
console.log(sum);
// if (sum % 3 === 0 || input.indexOf(0) !== -1) {
//   console.log(parseInt(arr.join('')));
// } else {
//   console.log(-1);
// }

if (sum % 3 === 0) {
  if (arr[arr.length - 1] === 0) {
    console.log(parseInt(arr.join('')));
  } else {
    console.log(-1);
  }
} else {
  console.log(-1);
}

/*



 30
 60
 90
120
150
180
210
240
270
300

900
990
1020
1050
1110



*/
