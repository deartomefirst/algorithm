const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [n, m] = nm;

let minXIdx = 0;
let minXVal = input[0][0];
for (let i = 1; i < n; i++) {
  if (minXVal > input[i][0]) {
    minXIdx = i;
    minXVal = input[i][0];
  }
}
let minYIdx = 0;
let minYVal = input[n - 1][0];
for (let i = 1; i < m; i++) {
  if (minYVal > input[n - 1][i]) {
    minYIdx = i;
    minYVal = input[n - 1][i];
  }
}

console.log(minXIdx + 1, minYIdx + 1);
