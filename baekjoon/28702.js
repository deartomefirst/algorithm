const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [first, second, third] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

function solution(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0 && num % 5 !== 0) return 'Fizz';
  if (num % 3 !== 0 && num % 5 === 0) return 'Buzz';
  return num;
}
if (!Number.isNaN(Number(first))) {
  console.log(solution(parseInt(first) + 3));
} else if (!Number.isNaN(Number(second))) {
  console.log(solution(parseInt(second) + 2));
} else {
  console.log(solution(parseInt(third) + 1));
}

// BigInt는 나온다면 어떻게 처리해야 하는지?
