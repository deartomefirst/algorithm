const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, B] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

console.log(n.toString(B).toUpperCase());
