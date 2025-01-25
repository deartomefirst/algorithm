const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);
console.log(arr.sort((a, b) => a - b).join('\n'));
