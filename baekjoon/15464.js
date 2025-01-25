const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, order, arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

n = +n;
order = order.split(' ').map((v) => +v);
arr = arr.split(' ');

let newArr;
for (let i = 0; i < 3; i++) {
  newArr = Array(n).fill(0);
  for (let j = 0; j < n; j++) {
    newArr[j] = arr[order[j] - 1];
  }
  arr = newArr;
}

console.log(newArr.join('\n'));
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 2, 2, 1, 1, 1, 0],
  [0, 1, 1, 2, 3, 2, 2, 1, 0],
  [0, 0, 0, 1, 2, 2, 2, 1, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];