const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [m, n] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

let s = 1;
let min;
let sum = 0;
while (s * s <= n) {
  if (s * s >= m) {
    if (min === undefined) {
      min = s * s;
    }
    sum += s * s;
  }
  s++;
}
if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum + '\n' + min);
}
