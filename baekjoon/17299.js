const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const N = +input[0];
const arr = input[1].split(' ').map(Number);

let counter = {};
for (let i = 0; i < arr.length; i++) {
  counter[arr[i]] = counter[arr[i]] || 0;
  counter[arr[i]] += 1;
}

let stack = [];
let answer = Array(N).fill(-1);

for (let i = 0; i < N; i++) {
  while (stack.length > 0 && counter[arr[stack.at(-1)]] < counter[arr[i]]) {
    answer[stack.pop()] = arr[i];
  }
  stack.push(i);
}

console.log(answer.join(' '));

/*

stack으로 생각해보자

[]



*/
