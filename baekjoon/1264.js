const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const vowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
const answer = [];
for (let i = 0; i < input.length - 1; i++) {
  let count = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (vowel.has(input[i][j])) count++;
  }
  answer.push(count);
}
console.log(answer.join('\n'));
