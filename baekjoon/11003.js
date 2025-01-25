const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

const [num, L] = input[0].trim().split(' ');
const arr = input[1].trim().split(' ');

let result = [];
let sum = 0;

/*
일단은 맨처음 구하자.
그리고 제일 작은 숫자가 0을 탈출하는 순간... 제일 작은 숫자를 구해야 함.
인덱스가 변하는 부분 수열에서 제일 작은 값을 찾는 방법...

우선순위 queue의 개념이 필요하다고 하는데... 
*/
