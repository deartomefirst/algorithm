const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')[1]
  .split(' ')
  .map(Number);

let min = 10000001;
let max = 1;

for (let i = 0; i < input.length; i++) {
  min = Math.min(input[i], min);
  max = Math.max(input[i], max);
}

console.log(min * max);
