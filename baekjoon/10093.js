const [a, b] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const min = Math.min(a, b);
const max = Math.max(a, b);
let result = [];

for (let i = min + 1; i < max; i++) {
  result.push(i);
}
console.log(result.length + '\n' + result.join(' '));

/*
13부터 9까지의 개수
13 - 9 + 1
14 - 8 - 1
*/
