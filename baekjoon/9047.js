const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];

const answer = [];
for (let i = 1; i <= n; i++) {
  let value = input[i];
  let num = 0;
  while (value !== '6174') {
    let min = [...value].sort();
    let max = [...min].reverse();
    let diff = +max.join('') - +min.join('');
    value = diff.toString().padStart(4, '0');
    num++;
  }
  answer.push(num);
}
console.log(answer.join('\n'));
