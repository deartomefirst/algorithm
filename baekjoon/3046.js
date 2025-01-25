const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [r1, s] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);
console.log(2 * s - r1);
