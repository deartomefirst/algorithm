const [num, ...str] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split('\n');
let result = [];
for (let i = 0; i < +num; i++) {
  let stack = [];
  let isVPS = true;

  for (let j = 0; j < str[i].length; j++) {
    if (str[i][j] === '(') {
      stack.push('(');
    }
    if (str[i][j] === ')') {
      if (stack.length === 0) {
        isVPS = false;
        break;
      }

      let popItem = stack.pop();

      if (popItem !== '(') {
        isVPS = false;
        break;
      }
    }
  }
  if (isVPS && stack.length === 0) result.push('YES');
  else result.push('NO');
}
console.log(result.join('\n'));
