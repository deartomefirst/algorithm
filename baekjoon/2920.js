const fs = require('fs');
const numArr = fs
  .readFileSync('input.txt')
  .toString()
  .split(' ')
  .map((v) => +v);

/*
ascending읹
descending
mixed 중에서 하나를 출력하자.

*/

function discriminator(arr) {
  if (arr[0] === 1) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== i + 1) return 'mixed';
    }
    return 'ascending';
  } else if (arr[0] === 8) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== 8 - i) return 'mixed';
    }
    return 'descending';
  } else {
    return 'mixed';
  }
}

console.log(discriminator(numArr));

/*

result = 0;
result += (arr[i] - arr[i-1]);
결과로 비교하는 방법도 있다.


*/
