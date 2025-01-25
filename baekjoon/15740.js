const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, b] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(BigInt);

console.log((a + b).toString());
