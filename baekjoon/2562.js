const arr = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

let max = 0;
let index = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[max]) {
    index = i;
    max = i;
  }
}
console.log(arr[max] + '\n' + (index + 1));
