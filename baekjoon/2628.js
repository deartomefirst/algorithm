const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [column, row] = input.shift().split(' ').map(Number);
const t = +input.shift();
const sorted = input
  .map((v) => v.split(' ').map(Number))
  .sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
let startColumn = 0;
let startRow = 0;
let maxColumn = 0;
let maxRow = 0;
for (let i = 0; i < sorted.length; i++) {
  const [type, val] = sorted[i];
  if (type === 0) {
    maxRow = Math.max(maxRow, val - startRow);
    startRow = val;
  } else {
    maxColumn = Math.max(maxColumn, val - startColumn);
    startColumn = val;
  }
}
// 자르고 나머지 부분
if (row !== startRow) {
  maxRow = Math.max(maxRow, row - startRow);
  if (maxRow === 0) {
    maxRow = row;
  }
}
if (column !== startColumn) {
  maxColumn = Math.max(maxColumn, column - startColumn);
  if (maxColumn === 0) {
    maxColumn = column;
  }
}
console.log(maxColumn * maxRow);
