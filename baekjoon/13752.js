const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const answer = [];
for (let i = 1; i <= input[0]; i++) {
  answer.push('='.repeat(input[i]));
}
console.log(answer.join('\n'));
