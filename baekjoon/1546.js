const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const num = +input[0];
const arr = input[1].split(' ').map((v) => +v);

let max = Math.max(...arr);
let sum = 0;
for (let i = 0; i < num; i++) {
  sum += (arr[i] / max) * 100;
}
console.log(sum / num);
