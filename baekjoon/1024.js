const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, L] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let k = L;
while (true) {
  if (((N * 2) / k + 1 - k) % 2 === 0) break;
  k++;
}
console.log()