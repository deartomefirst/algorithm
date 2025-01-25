const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = +input[0];
const has = input[1].split(' ').map(Number);
const m = +input[2];
const cards = input[3].split(' ').map(Number);

const set = new Set([...has]);
let result = Array(m).fill(0);
for (let i = 0; i < m; i++) {
  if (set.has(cards[i])) {
    result[i] = 1;
  }
}
console.log(result.join(' '));
