/*


0 8
8

04 48

00 01
i = 0
i = 0 4
i = 0 2 4 6

*/

let [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
for (let i = 0; i < +num; i++) {
  arr[i] = arr[i]
    .trim()
    .split(' ')
    .map((v) => +v);
}

let result = [0, 0];
function check(size, x, y) {
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (arr[x][y] !== arr[i][j]) return false;
    }
  }
  return true;
}

function makeSquarePaper(N, x, y) {
  if (check(N, x, y)) {
    result[arr[x][y]] += 1;
    return;
  }
  let half = parseInt(N / 2);
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      makeSquarePaper(half, x + i * half, y + j * half);
    }
  }
}

makeSquarePaper(num, 0, 0);
console.log(result.join('\n'));
