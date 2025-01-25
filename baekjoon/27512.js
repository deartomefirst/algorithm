const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, m] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

if (n % 2 === 0 || m % 2 === 0) {
  console.log(n * m);
} else {
  console.log(n * m - 1);
}
