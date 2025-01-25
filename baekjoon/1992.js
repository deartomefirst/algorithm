let [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
for (let i = 0; i < +num; i++) {
  arr[i] = arr[i]
    .trim()
    .split('')
    .map((v) => +v);
}

let result = '';

function check(size, x, y) {
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (arr[x][y] !== arr[i][j]) return false;
    }
  }
  return true;
}

function optimizeVideo(n, x, y) {
  if (check(n, x, y)) {
    result += arr[x][y];
    return;
  }
  result += '(';
  let half = parseInt(n / 2);
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      optimizeVideo(half, x + i * half, y + j * half);
    }
  }
  result += ')';
}
optimizeVideo(num, 0, 0);
console.log(result);
