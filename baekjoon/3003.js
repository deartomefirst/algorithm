const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

const chess = [1, 1, 2, 2, 2, 8];
let answer = [];

for (let i = 0; i < input.length; i++) {
  answer.push(chess[i] - input[i]);
}

console.log(answer.join(' '));
