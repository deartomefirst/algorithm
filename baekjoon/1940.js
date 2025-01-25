const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, m, arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const N = +n;
const M = +m;

const sorted = arr
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let s = 0;
let f = N - 1;

let count = 0;
while (s < f) {
  let sum = sorted[s] + sorted[f];
  if (sum === M) {
    count++;
    s++;
    f--;
  } else if (sum < M) {
    s++;
  } else {
    f--;
  }
}
console.log(count);
