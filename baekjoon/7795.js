const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

let result = [];
for (let i = 0; i < +input[0]; i++) {
  let left = input[3 * (i + 1) - 1]
    .trim()
    .split(' ')
    .map((v) => +v)
    .sort((a, b) => a - b);
  let right = input[3 * (i + 1)]
    .trim()
    .split(' ')
    .map((v) => +v)
    .sort((a, b) => a - b);

  let count = 0;
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx !== left.length && rightIdx !== right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      count += rightIdx;
      leftIdx++;
    } else {
      rightIdx++;
    }
  }
  count += (left.length - leftIdx) * right.length;
  result.push(count);
}
console.log(result.join('\n'));
/*
left
끝

right


*/
