const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [A, B, C, X, Y] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let halfNum = Math.min(X, Y);

const minCost = Math.min(
  A * X + B * Y,
  Math.max(A, B) * 2 * C,
  A * (X - halfNum) + B * (Y - halfNum) + 2 * C * halfNum
);
console.log(
  A * X + B * Y,
  Math.max(A, B) * 2 * C,
  A * (X - halfNum) + B * (Y - halfNum) + 2 * C * halfNum
);
console.log(minCost);

/*

1500 2000 500



*/
