const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const parentheses = require('fs').readFileSync(filePath, 'utf-8').trim();
let stack = [];

for (let i = 0; i < parentheses.length; i++) {
  if (parentheses[i] === ')') {
    if (stack.length === 0) {
      stack.push(parentheses[i]);
    } else {
      if (stack.at(-1) === '(') {
        stack.pop();
        continue;
      }
      stack.push(parentheses[i]);
    }
  } else {
    stack.push(parentheses[i]);
  }
}
console.log(stack.length);
