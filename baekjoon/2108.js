let [N, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);

arr.sort((a, b) => a - b);
// 원소의 빈도수를 나타내는 배열 -> 입력되는 정수의 절댓값이 4000을 넘지 않는다.

//  배열 원소들의 합
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(parseInt(Math.round(sum / N)));
// 중앙값
console.log(arr[Math.floor(N / 2)]);
// 최빈값
let frequency = {};
for (let i = 0; i < N; i++) {
  frequency[arr[i]] = ++frequency[arr[i]] || 1;
}
const max = Math.max(...Object.values(frequency));

let maxValues = [];
for (let element in frequency) {
  if (frequency[element] === max) {
    maxValues.push(element);
  }
}
if (maxValues.length > 1) {
  console.log(+maxValues.sort((a, b) => a - b)[1]);
} else {
  console.log(+maxValues[0]);
}
// 범위
console.log(arr[N - 1] - arr[0]);
