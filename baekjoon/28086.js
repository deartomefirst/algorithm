const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim();

function calculateOctalExpression(expression) {
  const regex = /(-?[0-7]+)([+\-*\/])([0-7]+)/;
  const match = expression.match(regex);

  if (!match) {
    return 'invalid';
  }

  const A = makeDecimal(match[1]);
  const operator = match[2];
  const B = parseInt(match[3]);

  let result;

  switch (operator) {
    case '+':
      result = A + B;
      break;
    case '-':
      result = A - B;
      break;
    case '*':
      result = A * B;
      break;
    case '/':
      if (B === 0) {
        return 'invalid';
      }
      result = Math.floor(A / B);
      break;
    default:
      return 'invalid';
  }

  return result.toString(8);
}

function makeDecimal(str) {
  let start = 0;
  if (str[0] === '-') {
    start = 1;
  }
  let result = 0;
  for (let i = str.length - 1; i >= start; i--) {
    result += Math.pow(8, str.length - i - 1) * +str[i];
  }
  return start === 1 ? -1 * result : result;
}

const output = calculateOctalExpression(input);
console.log(output);
