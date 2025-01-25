const numArr = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

/*
  .filter(v => +v % 2 !== 0)

*/

// 주어지는 자연수는 100보다 작다.
let min = 100;
let sum = 0;
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] % 2 !== 0) {
    sum += numArr[i];
    min = numArr[i] < min ? numArr[i] : min;
  }
}
if (sum === 0) {
  console.log(-1);
} else {
  console.log(`${sum}
${min}`);
}

/*

배열을 만드는 과정에서 filter 함수로 처리해주기

자연수의 조건이 들어갔는지 확인하기

연산에서 이상한 값이 나오지 않을까... 생각하기



*/
