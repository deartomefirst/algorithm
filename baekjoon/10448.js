const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let t = Number(input[0]);
for (let i = 1; i <= t; i++) {
  input[i]
}