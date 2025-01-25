const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [N, L] = input[0].split(' ').map(Number);
const holes = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let covered = 0;
let tape = 0;

for (let i = 0; i < N; i++) {
  if (covered < holes[i]) {
    covered = holes[i] + L - 0.5;
    tape++;
  }
}
console.log(tape);
