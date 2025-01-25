const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let arr = require('fs').readFileSync(filePath, 'utf-8').trim().split('');

let now = arr[0];
let num = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== now) {
    num += 1;
    now = arr[i];
  }
}

if (num % 2 === 0) {
  console.log(num / 2);
} else {
  console.log(Math.floor(num / 2) + 1);
}
