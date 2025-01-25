const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

// function compare(a, b) {
//   // 첫 번째 숫자를 기준으로 오름차순 정렬
//   // const numA = parseInt(a.split(' ')[0]);
//   // const numB = parseInt(b.split(' ')[0]);
//   // if (numA !== numB) {
//   //   return numA - numB;
//   // }

//   // 첫 번째 숫자가 같은 경우, 두 번째 숫자를 오름차순 정렬
//   const subNumA = parseInt(a.split(' ')[1]);
//   const subNumB = parseInt(b.split(' ')[1]);
//   return subNumA - subNumB;
// }

const timeTable = arr
  .map((v) => v.split(' ').map(Number))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

console.log(timeTable);

let min = timeTable[0][1];
let classCounter = 1;

for (let i = 1; i < +num; i++) {
  // if (timeTable[i][1] < min) {
  //   min = timeTable[i][1];
  // }
  if (timeTable[i][0] >= min) {
    min = timeTable[i][1];
    classCounter++;
  }
}
console.log(classCounter);
/*


[12 14]
[]



1 6
2 3
3 4
4 5


*/
