const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [price, count, ...receipt] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let sum = 0;
for (let i = 0; i < +count; i++) {
  const [p, n] = receipt[i].split(' ').map(Number);
  sum += p * n;
}
console.log(sum === +price ? 'Yes' : 'No');
