const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const answer = [];

for (let i = 0; i < input.length - 1; i++) {
  let isTautogram = true;
  const arr = input[i].trim().split(' ');
  let startChar = arr[0][0].toLowerCase();
  for (let j = 1; j < arr.length; j++) {
    if (arr[j][0].toLowerCase() !== startChar) {
      isTautogram = false;
      break;
    }
  }
  answer.push(isTautogram ? 'Y' : 'N');
}
console.log(answer.join('\n'));
