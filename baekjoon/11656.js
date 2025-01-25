const input = require('fs').readFileSync('input.txt', 'utf-8').trim();
let result = [input];
for (let i = 1; i < input.length; i++) {
  result.push(input.slice(i));
}
console.log(result.sort());
