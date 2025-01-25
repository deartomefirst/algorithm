const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, b] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let numArr = [0];
let count = 0;
let num = 1;

while (numArr.length <= b) {
  numArr.push(num);
  count++;
  if (count === num) {
    num++;
    count = 0;
  }
}

console.log(numArr.slice(a, b + 1).reduce((prev, acc) => prev + acc, 0));
