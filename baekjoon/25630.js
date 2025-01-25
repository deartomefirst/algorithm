const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, str] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let magic = 0;
for (let i = 0; i < n / 2; i++) {
  if (str[i] !== str[n - 1 - i]) {
    magic++;
  }
}
console.log(magic);
