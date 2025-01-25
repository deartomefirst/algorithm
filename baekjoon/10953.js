const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const T = +input[0];
const answer = [];
for (let i = 1; i <= T; i++) {
  let [a, b] = input[i].split(',').map(Number);
  answer.push(a + b);
}
console.log(answer.join('\n'));
