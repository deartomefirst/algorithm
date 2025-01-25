const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim();

const upperInput = input.toUpperCase();

let result = '';
for (let i = 0; i < input.length; i++) {
  if (upperInput[i] === input[i]) {
    result += input[i].toLowerCase();
  } else {
    result += upperInput[i];
  }
}
console.log(result);
