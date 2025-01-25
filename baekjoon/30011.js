const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, polys] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

polys = polys.split(' ').map((v) => +v);

let score = (polys[0] - 2) * 180;
for (let i = 1; i < n; i++) {
  score += polys[i] * 180;
}
console.log(score);

//
//
//
