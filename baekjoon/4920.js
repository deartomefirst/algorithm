const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
let idx = 0;
let num = 0;
while (idx !== input.length - 1) {
  num++;
  let n = input[idx++];
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(
      input[idx++]
        .split(' ')
        .filter((v) => v)
        .map(Number)
    );
  }
  let max = -4000000;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // idx를 확인해서 가능한 경우는 모두 조사해준다
      let sum = 0;
      // 긴 거
      if (j + 3 < n) {
        sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i][j + 3];
        max = Math.max(max, sum);
      }
      if (i + 3 < n) {
        sum = arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 3][j];
        max = Math.max(max, sum);
      }

      // 번개
      if (i + 2 < n && j - 1 >= 0) {
        sum = arr[i][j] + arr[i + 1][j] + arr[i + 1][j - 1] + arr[i + 2][j - 1];
        max = Math.max(max, sum);
      }

      if (i + 1 < n && j + 2 < n) {
        sum = arr[i][j] + arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 1][j + 2];
        max = Math.max(max, sum);
      }

      // 기억
      if (i + 1 < n && j + 2 < n) {
        sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 2];
        max = Math.max(max, sum);
      }
      if (i + 1 < n && j + 2 < n) {
        sum = arr[i][j] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 1][j + 2];
        max = Math.max(max, sum);
      }
      if (i + 2 < n && j - 1 >= 0) {
        sum = arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 2][j - 1];
        max = Math.max(max, sum);
      }
      if (i + 2 < n && j + 1 < n) {
        sum = arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i][j + 1];
        max = Math.max(max, sum);
      }
      // 법규
      if (i + 1 < n && j + 2 < n) {
        sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1];
        max = Math.max(max, sum);
      }
      if (i + 2 < n && j + 1 < n) {
        sum = arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 1][j + 1];
        max = Math.max(max, sum);
      }
      if (i - 1 >= 0 && j + 2 < n) {
        sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i - 1][j + 1];
        max = Math.max(max, sum);
      }
      if (i + 2 < n && j - 1 >= 0) {
        sum = arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 1][j - 1];
        max = Math.max(max, sum);
      }
      // 네모
      if (i + 1 < n && j + 1 < n) {
        sum = arr[i][j] + arr[i + 1][j] + arr[i][j + 1] + arr[i + 1][j + 1];
        max = Math.max(max, sum);
      }
    }
  }
  console.log(`${num}. ${max}`);
}
