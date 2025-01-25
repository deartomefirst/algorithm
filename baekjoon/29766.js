const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim();

let answer = 0;
for (let i = 0; i < input.length - 3; i++) {
  
  if (
    input[i] === 'D' &&
    input[i + 1] === 'K' &&
    input[i + 2] === 'S' &&
    input[i + 3] === 'H'
  ) {
    answer++;
    i += 3;
  }
}
console.log(answer);
