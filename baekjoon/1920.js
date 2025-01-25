/*

첫째 줄에 자연수 N
A
4 1 5 2 3 안에

1 3 7 9 5 가 들어있는지 확인
있으면 1 없으면 0을 출력



N은 최대 100,000개
M도 최대 100,000개

연산을 몇번 할 수 있는지... 고려해서 문제를 풀어야한다.

*/

const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input[0];
const valueCheckSet = new Set(input[1].split(' ').map((v) => +v));

// console.log(valueCheckSet);

const M = +input[2];
const arr = input[3].split(' ').map((v) => +v);
let result = [];

for (let i = 0; i < M; i++) {
  result.push(valueCheckSet.has(arr[i]) ? 1 : 0);
}

console.log(result.join('\n'));
