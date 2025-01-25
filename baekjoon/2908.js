const [a, b] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +[...v].reverse().join(''));

console.log(`${a > b ? a : b}`);
