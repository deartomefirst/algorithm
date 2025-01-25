const fs = require('fs');
const arr = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

function findDwarfs(arr) {
  arr.sort((a, b) => a - b);
  let sumDiff = arr.reduce((a, b) => a + b) - 100;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sumDiff) {
        return arr.filter((_, index) => index !== i && index !== j);
      }
    }
  }
}
let result = findDwarfs(arr);

// console.log(result.join('\n'));
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}

// 틀린 코드라고 출력되는데 이유를 모르겠다.... 무조건 확인해서 기록해놓자...
