let [num, arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

let time = arr
  .split(' ')
  .map((v) => +v)
  .sort((a, b) => a - b);
let result = time[0];
let current = time[0];
for (let i = 1; i < +num; i++) {
  current = current + time[i];
  result += current;
}
console.log(result);

// 문자가 하나만 있을 때 split 처리 어떻게 되나요?
