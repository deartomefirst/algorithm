const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const coords = input.map((v) => v.split(' ').map(Number));

function crossProduct(a, b) {
  return (
    ((a[0] - coords[0][0]) * (b[1] - coords[0][1]) -
      (a[1] - coords[0][1]) * (b[0] - coords[0][0])) /
    2
  );
}

let area = 0;

for (let i = 1; i < +n - 1; i++) {
  area += crossProduct(coords[i], coords[i + 1]);
}
console.log(Math.abs(area).toFixed(1));
