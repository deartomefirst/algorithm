const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

const num = +input[0];
const arr = input[1].split(' ').map((v) => +v);

let stack = [];
let result = [];

for (let i = 0; i < num; i++) {
  while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
    result[stack.pop()] = arr[i];
    // stack.pop();
    // result.push(arr[i]);
  }
  stack.push(i);
  console.log(stack);
}

while (stack.length !== 0) {
  result[stack.pop()] = -1;
}

console.log(result.join(' '));
/*

스택에 뭘 쌓을 것인가...
stack에 3이 있다가 5를 만나면 사라진다.

stack에 5, 2가 쌓여있다가 7을 만나고 쭉 사라지고 
7이 stack에 쌓인다.
다 돌았네?
stack에 있던 값들은 전부 -1을 반출한다.

배열에서 값을 직접 쌓는 것은 좋지 못한 경우가 많다...

처음에는 값을 저장하려고 했다...
결국 while 문에서 순서대로 값을 넣어줘야 할 때 문제가 발생함


cs적인 부분으로 접근해서 물어보는 방법도 좋은 것 같다.




*/
