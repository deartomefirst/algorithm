// 멀티버스2
/*

순서가 같은 것을 

2 1 3
1 2 3
3 1 2
1 2 3
2 1 3

*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [MN, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [m, n] = MN.trim()
  .split(' ')
  .map((v) => +v);
const universe = input.map((v) =>
  v
    .trim()
    .split(' ')
    .map((v) => +v)
);
let orderArr = new Array(10000001).fill(0);

console.log(universe);

function makeOrderArr(arr) {
  let sortArr = [...arr].sort((a, b) => a - b);
  let order = 1;
  for (let i = 0; i < sortArr.length; i++) {
    if (orderArr[sortArr[i]]) continue;
    orderArr[sortArr[i]] = order++;
  }
  let result = Array(sortArr.length);
  for (let i = 0; i < sortArr.length; i++) {
    result[i] = orderArr[arr[i]];
  }
  return result;
}

function isSameOrder(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
let result = Array(m);
for (let i = 0; i < m; i++) {
  result[i] = makeOrderArr(universe[i]);
}
console.log(result);
/*

10000 * 10001 /2




*/
