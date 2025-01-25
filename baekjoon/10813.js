const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
const array = Array(n)
  .fill(0)
  .map((v, i) => i + 1);

for (let i = 0; i < m; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  [array[a - 1], array[b - 1]] = [array[b - 1], array[a - 1]];
}
console.log(array.join(' '));
