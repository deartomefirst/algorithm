const fs = require('fs');
const [...input] = fs.readFileSync('input.txt').toString().trim();

let isOpen = false;
let stack = [];
let queue = [];
let answer = [];

for (let i = 0; i < input.length; i++) {
  let ch = input[i];
  if (ch === '<') {
    isOpen = true;
    if (stack.length > 0) {
      answer.push(stack.reverse().join(''));
    }
    answer.push(ch);
    stack = [];
  } else if (ch === '>') {
    isOpen = false;
    answer.push(queue.join(''));
    answer.push(ch);
    queue = [];
  } else if (!isOpen && ch === ' ') {
    if (stack.length > 0) {
      answer.push(stack.reverse().join(''));
    }
    answer.push(ch);
    stack = [];
  } else {
    if (isOpen) {
      queue.push(ch);
    } else {
      stack.push(ch);
    }
  }
}
if (stack.length !== 0) {
  answer.push(stack.reverse().join(''));
}
console.log(answer.join(''));
