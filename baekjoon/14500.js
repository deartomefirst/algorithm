const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input.map((v) => v.split(' ').map(Number));
let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // ----
    if (j + 3 < m) {
      max = Math.max(
        max,
        arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i][j + 3]
      );
    }
    // ||||
    if (i + 3 < n) {
      max = Math.max(max, arr[i][j] + arr[i][j] + arr[i][j] + arr[i][j]);
    }
  }
}
