const fs = require('fs');
const [num, ...arr] = fs.readFileSync('input.txt').toString().split('\n');

function compare(a, b) {
  if (a.length > b.length) return 1;
  else if (a.length < b.length) return -1;
  else {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
}

const sortedArr = arr.sort(compare);
const uniqueSortedArr = Array.from(new Set(sortedArr));
// 아래 풀이랑 비교하면 메모리적으로 효율이 별로 없다...

// let tmp = sortedArr[0];
// let result = [tmp];
// for (let i = 1; i < sortedArr.length; i++) {
//   if (tmp === sortedArr[i]) {
//     continue;
//   } else {
//     result.push(sortedArr[i]);
//     tmp = sortedArr[i];
//   }
// }

// console.log(result.join('\n').trim());
console.log(uniqueSortedArr.join('\n').trim());

/*

배열에서 중복을 제거해야 함.

1 1 1

*/
