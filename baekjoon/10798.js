const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(''));

const maxLength = Math.max(...input.map((v) => v.length));
const answer = [];

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] !== undefined) {
      answer.push(input[j][i]);
    }
  }
}

console.log(answer.join(''));
