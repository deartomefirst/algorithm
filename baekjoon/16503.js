const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const expression = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ');

let [a, operator1, b, operator2, c] = expression;

function calculate(x, op, y) {
  switch (op) {
    case '+':
      return Number(x) + Number(y);
    case '-':
      return Number(x) - Number(y);
    case '*':
      return Number(x) * Number(y);
    default:
      return Math.trunc(Number(x) / Number(y));
  }
}

// 첫 번째 계산

let result1 = calculate(a, operator1, b);
let finalResult1 = calculate(result1, operator2, c);

// 두 번째 계산
let result2 = calculate(b, operator2, c);
let finalResult2 = calculate(a, operator1, result2);
console.log(
  Math.min(finalResult1, finalResult2) +
    '\n' +
    Math.max(finalResult1, finalResult2)
);
