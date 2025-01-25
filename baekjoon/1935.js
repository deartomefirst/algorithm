const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, str, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const n = +N;

const numStack = [];
const numArr = input.map((v) => +v);
// + -22 * - 23 / : -18 - : -20

for (let i = 0; i < str.length; i++) {
  let codeNum = str[i].charCodeAt(0) - 'A'.charCodeAt(0);
  if (codeNum >= 0) {
    numStack.push(numArr[codeNum]);
  } else {
    let second = numStack.pop();
    let first = numStack.pop();
    if (codeNum === -22) {
      numStack.push(first + second);
    } else if (codeNum === -20) {
      numStack.push(first - second);
    } else if (codeNum === -23) {
      numStack.push(first * second);
    } else if (codeNum === -18) {
      numStack.push(first / second);
    }
  }
}
console.log(numStack[0].toFixed(2));
