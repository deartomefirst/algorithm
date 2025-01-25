const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('-');
let result = [];
input.forEach((v) => {
  let arr = v.split('+').map((val) => +val);
  result.push(arr.reduce((prev, cur) => prev + cur, 0));
});
console.log(result.reduce((prev, cur) => prev - cur));
