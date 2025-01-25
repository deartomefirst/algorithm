const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = +input[0];

if (n === 1) {
  console.log(0);
} else {
  let minX = 100000;
  let minY = 100000;
  let maxX = -100000;
  let maxY = -100000;

  for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  console.log((maxX - minX) * (maxY - minY));
}
