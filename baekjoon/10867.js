const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const set = new Set(input.split(' ').map(Number));
console.log([...set].sort((a, b) => a - b).join(' '));
