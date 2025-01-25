const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
let newArr = arr.map((v) => v.split(' '));

function compare(a, b) {
  const [xofA, yofA] = a.split(' ').map((v) => +v);
  const [xofB, yofB] = b.split(' ').map((v) => +v);
  if (yofA < yofB) return -1;
  else if (yofA > yofB) return 1;
  else {
    if (xofA < xofB) return -1;
    else if (xofA > xofB) return 1;
    else {
      return 0;
    }
  }
}

console.log(arr.sort(compare).join('\n'));

// function compare(a, b) {
//   const [xofA, yofA] = a.split(' ').map((v) => +v);
//   const [xofB, yofB] = b.split(' ').map((v) => +v);
//   if (yofA < yofB) return -1;
//   else if (yofA > yofB) return 1;
//   else {
//     if (xofA < xofB) return -1;
//     else if (xofA > xofB) return 1;
//     else {
//       return 0;
//     }
//   }
// }

// console.log(arr.sort(compare).join('\n'));
// -> 실행 시간이 너무 길다. callback 함수에서 시간이 너무 많이 걸림
// 꼭 배열로 안쪼개고
/*

for (let i = 0; i < testCount; i++) {
    A[i] = A[i].split(" ").map((item) => +item.trim("\r"));
}

*/
