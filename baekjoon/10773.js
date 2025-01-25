const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);
const num = +input[0];
let sum = [];
for (let i = 1; i <= num; i++) {
  if (input[i] === 0) {
    sum.pop();
  } else {
    sum.push(input[i]);
  }
}
console.log(sum.reduce((acc, cur) => acc + cur, 0));
