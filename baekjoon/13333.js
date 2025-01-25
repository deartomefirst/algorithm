const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, arr] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

n = +n;
arr = arr
  .split(' ')
  .map((v) => +v)
  .sort((a, b) => b - a);

let qIndex = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] >= i + 1) {
    qIndex = i + 1;
  } else {
    break;
  }
}

console.log(qIndex);
