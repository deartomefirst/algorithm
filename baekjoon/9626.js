const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [mn, ulrd, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [m, n] = mn.split(' ').map(Number);
const [u, l, r, d] = ulrd.split(' ').map(Number);

const answer = Array.from({ length: m + u + d }, () =>
  Array(n + l + r).fill('#')
);

for (let i = 0; i < answer.length; i++) {
  for (let j = 0; j < answer[0].length; j++) {
    if ((i + j) % 2 === 1) {
      answer[i][j] = '.';
    }
  }
}

for (let i = u; i < u + m; i++) {
  for (let j = l; j < l + n; j++) {
    answer[i][j] = input[i - u][j - l];
  }
}
console.log(answer.map((v) => v.join('')).join('\n'));
