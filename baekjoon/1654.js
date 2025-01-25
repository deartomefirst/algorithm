const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [KN, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [K, N] = KN.split(' ').map(Number);
const cables = input.map(Number).sort((a, b) => a - b);

let start = 1;
let end = cables[K - 1];
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let count = cables.reduce((prev, val) => {
    return prev + Math.floor(val / mid);
  }, 0);
  if (count < N) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
/*

1

457 539 743 802

*/

// const [K, N] = input.split(' ').map(Number);
// let num = N;
// const sumCables = cables.reduce((acc, cur) => acc + parseInt(cur), 0);
// let maxLength = Math.floor(sumCables / num);

// function countCables(arr, length) {
//   return arr.reduce((acc, cur) => acc + Math.floor(cur / length), 0);
// }

// while (countCables(cables, maxLength) < N) {
//   num += 1;
//   maxLength = Math.floor(sumCables / num);
// }

// let left = maxLength;
// let right = Math.floor(sumCables / (num - 1));
// console.log(left, right);
// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);
//   console.log(mid, 'mid');
//   if (countCables(cables, mid) < N) {
//     right = mid - 1;
//   } else {
//     left = mid + 1;
//   }
// }
// console.log(right);

/*

내가 생각하는 알고리즘

1. 배열 전체를 더해서 N으로 나눠준다.
   -> 전체를 합친 수를 N 나눈 것이 무조건 더 큰 값이라서 연산 자체를 줄일 수 있다.
   -> 만들 수 있는 랜선의 최대 길이보다는 무조건 더 큰 값
2. N보다 countCables의 결과가 작다면 N등분의 maxLength의 값을 올려준다.



매개변수탐색 -> 조건을 만족하는 특정한 값을 찾아갈 때 사용한다.

*/
