const fs = require('fs');
const arr = fs
  .readFileSync('input.txt')
  .toString()
  .split(' ')
  .map((v) => +v);
let result = 0;
for (let i = 0; i < arr.length; i++) {
  result += (arr[i] * arr[i]) % 10;
}
console.log(result % 10);
