const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [WHN, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [W, H, N] = WHN.split(' ').map(Number);
const cities = input.map((v) => v.split(' ').map(Number));
let [startX, startY] = [1, 1];
let num = 0;
for (let i = 0; i < N; i++) {
  let [x, y] = cities[i];
  if (x - startX === y - startY) {
    num += Math.abs(x - startX);
  } else if (x - startX === 0 || y - startY === 0) {
    if (x - startX === 0) {
      num += Math.abs(y - startY);
    } else {
      num += Math.abs(x - startX);
    }
  } else if ((x - startX) * (y - startY) > 0) {
    let max = Math.max(Math.abs(x - startX), Math.abs(y - startY));
    num += max;
  } else {
    num += Math.abs(x - startX) + Math.abs(y - startY);
  }
  startX = x;
  startY = y;
}
console.log(num);
