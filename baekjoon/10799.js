const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim();
let answer = 0;
let stack = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') {
    stack.push(input[i]);
  } else {
    if (input[i - 1] === '(') {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer += 1;
    }
  }
}
console.log(answer);

/*
(((()(()()))(())()))(()())
0123
(((())))
0123
3 2 1


()(((()())(())()))(())

stack 0 1
result 0 3 3 2 3 2 2 1 1

*/
