const input = require('fs').readFileSync('input.txt', 'utf-8').trim();
const num = Number(input);
let result = 0;
let start = num - 9 * input.length < 0 ? 1 : num - 9 * input.length;

function sumDigits(num) {
  let sum = 0;
  let numArr = [...String(num)];
  for (let i = 0; i < numArr.length; i++) {
    sum += Number(numArr[i]);
  }
  return sum;
}

for (let i = start; i < num; i++) {
  if (i + sumDigits(i) === num) {
    result = i;
    break;
  }
}

console.log(result);

/*

최대한 가까운 곳에서 시작했는데...
왜? 시간초과?

9 9 9 9 9 9 




*/
