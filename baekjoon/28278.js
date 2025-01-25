const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [N, ...commands] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let stack = [];
let answer = [];
for (let i = 0; i < N; i++) {
  switch (commands[i][0]) {
    case '1':
      stack.push(commands[i].split(' ')[1]);
      break;
    case '2':
      if (stack.length === 0) {
        answer.push(-1);
      } else {
        answer.push(stack.pop());
      }
      break;
    case '3':
      answer.push(stack.length);
      break;
    case '4':
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    default:
      if (stack.length === 0) {
        answer.push(-1);
      } else {
        answer.push(stack.at(-1));
      }
  }
}

console.log(answer.join('\n'));
