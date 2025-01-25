const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const T = +input[0];

let answer = [];

for (let i = 1; i <= T; i++) {
  let [n, m] = input[i].split(' ').map(Number);
  answer.push(comb(m, n));
}
console.log(answer.join('\n'));

function comb(n, m) {
  let result = 1;
  if (n === m) return 1;
  let small = Math.min(m, n - m);
  for (let i = n; i > n - small; i--) {
    result = (result * i) / (n - i + 1);
  }
  return result;
}

