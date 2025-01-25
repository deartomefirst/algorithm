const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const num = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
const operations = input[2].split(' ').map(Number);
const operationArr = [];
for (let i = 0; i < operations.length; i++) {
  for (let j = 0; j < operations[i]; j++) {
    operationArr.push(i + 1);
  }
}

const set = new Set();
const isUsed = Array(operationArr.length).fill(false);

function backtrack(arr) {
  if (arr.length === num - 1) {
    set.add(arr.slice());
    return;
  }

  for (let i = 0; i < operationArr.length; i++) {
    if (isUsed[i]) continue;
    arr.push(operationArr[i]);
    isUsed[i] = true;
    backtrack(arr);
    isUsed[i] = false;
    arr.pop();
  }
}
backtrack([]);

function calculate(a, operation, b) {
  if (operation === 1) return a + b;
  else if (operation === 2) return a - b;
  else if (operation === 3) return a * b;
  else {
    return Math.trunc(a / b);
  }
}

let max = -1000000001;
let min = 1000000001;

set.forEach((v) => {
  let sum = arr[0];

  for (let i = 0; i < v.length; i++) {
    sum = calculate(sum, v[i], arr[i + 1]);
  }
  min = Math.min(sum, min);
  max = Math.max(sum, max);
});

console.log(max + '\n' + min);
/*

연산의 출현 횟수를 배열로 만들고
-> 순열 

0 1 2 3



*/
