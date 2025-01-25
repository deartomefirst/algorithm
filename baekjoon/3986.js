const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
const num = +input[0];
let result = 0;
for (let i = 1; i <= num; i++) {
  let stack = [input[i][0]];
  for (let j = 1; j < input[i].length; j++) {
    if (stack[stack.length - 1] === input[i][j]) {
      stack.pop();
    } else {
      stack.push(input[i][j]);
    }
  }
  if (stack.length === 0) {
    result++;
  }
}
console.log(result);
