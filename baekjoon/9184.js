const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const memo = {};
function recursion(a, b, c) {
  const key = `${a},${b},${c}`;
  if (key in memo) return memo[key];

  if (a <= 0 || b <= 0 || c <= 0) return 1;

  if (a > 20 || b > 20 || c > 20) return recursion(20, 20, 20);

  if (a < b && b < c) {
    memo[key] =
      recursion(a, b, c - 1) +
      recursion(a, b - 1, c - 1) -
      recursion(a, b - 1, c);
  } else {
    memo[key] =
      recursion(a - 1, b, c) +
      recursion(a - 1, b - 1, c) +
      recursion(a - 1, b, c - 1) -
      recursion(a - 1, b - 1, c - 1);
  }

  return memo[key];
}

let answer = [];
for (let i = 0; i < input.length - 1; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);

  answer.push(`w(${a}, ${b}, ${c}) = ${recursion(a, b, c)}`);
}
console.log(answer.join('\n'));
/*

1 1 1
0 1 1 + 0 0 1 + 0 1 0 - 0 0 0


[0,0,0]
[0,0,1]



*/
