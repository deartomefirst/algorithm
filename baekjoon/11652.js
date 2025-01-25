const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => BigInt(v));

arr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
let currentFrequency = 1;
let maxIndex = 0;
let maxFrequency = 1;

for (let i = 1; i < num; i++) {
  if (arr[i - 1] === arr[i]) {
    currentFrequency += 1;
    if (maxFrequency < currentFrequency) {
      maxIndex = i;
      maxFrequency = currentFrequency;
    }
  } else {
    currentFrequency = 1;
  }
  console.log(currentFrequency, maxIndex, maxFrequency);
}

console.log(String(arr[maxIndex]));

// BigInt
/*

BigInt를 사용하면
어떤 연산들이 불가능/가능한지 정리하기

*/
