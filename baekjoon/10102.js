const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, str] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const counter = { A: 0, B: 0 };
for (let i = 0; i < n; i++) {
  counter[str[i]]++;
}
console.log(
  counter['A'] > counter['B'] ? 'A' : counter['A'] < counter['B'] ? 'B' : 'Tie'
);
