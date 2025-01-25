const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
const [length, num] = input[0].split(' ').map((v) => +v);

// 누적합을 구해서
const arr = input[1]
  .trim()
  .split(' ')
  .map((v) => +v);

let sum = 0;
const accumulatedArray = [0];

for (let i = 0; i < length; i++) {
  sum += parseInt(arr[i]);
  accumulatedArray.push(sum);
}
const result = [];
for (let i = 2; i < 2 + num; i++) {
  let [start, finish] = input[i]
    .trim()
    .split(' ')
    .map((v) => +v);
  result.push(accumulatedArray[finish] - accumulatedArray[start - 1]);
}
console.log(result.join('\n'));


/*

누적합을 구하는 방식

forEach나 다른 방법이... map도 가능하다

*/