const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('');
let result = 1;
for (let i = 0; i < input.length; i++) {
  if (input[i] === 'd') {
    if (input[i - 1] === 'd') {
      result *= 9;
    } else {
      result *= 10;
    }
  } else {
    if (input[i - 1] === 'c') {
      result *= 25;
    } else {
      result *= 26;
    }
  }
}
console.log(result);
