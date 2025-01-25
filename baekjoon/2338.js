const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, b] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => BigInt(v));
let result = [a + b, a - b, a * b];
console.log(result.join('\n'));
