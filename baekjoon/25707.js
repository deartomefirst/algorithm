const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const newArr = arr
  .split(' ')
  .map((v) => +v)
  .sort((a, b) => a - b);

let length = 0;
for (let i = 1; i < n; i++) {
  length += newArr[i] - newArr[i - 1];
}
length += newArr[n - 1] - newArr[0];
console.log(length);
