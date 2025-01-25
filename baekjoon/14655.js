const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, first, second] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const firstSum = first.split(' ').reduce((acc, cur) => acc + Math.abs(+cur), 0);
const secondSum = second
  .split(' ')
  .reduce((acc, cur) => acc - Math.abs(+cur), 0);

console.log(firstSum - secondSum);
