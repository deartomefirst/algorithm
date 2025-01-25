const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = Number(input[0]);
const [type, ...rest] = input[1].split(' ').map(BigInt);

function factorial(n) {
  if (n === 0 || n === 1) return 1n;
  let result = 1n;
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  return result;
}

if (type === 1n) {
  let order = rest[0] - 1n;
  const numbers = Array.from({ length: N }, (_, i) => i + 1);
  const factorials = Array.from({ length: N }, (_, i) => factorial(i));
  const result = [];

  for (let i = N - 1; i >= 0; i--) {
    const idx = Number(order / factorials[i]);
    result.push(numbers[idx]);
    numbers.splice(idx, 1);
    order = order % factorials[i];
  }
  console.log(result.join(' '));
} else {
  const numbers = Array.from({ length: N }, (_, i) => BigInt(i + 1));
  const factorials = Array.from({ length: N }, (_, i) => factorial(i));
  let idx = 0n;

  for (let i = 0; i < N; i++) {
    const cur = rest[i];
    for (const num of numbers) {
      if (num < cur) {
        idx += factorials[N - i - 1];
      } else {
        break;
      }
    }
    numbers.splice(numbers.indexOf(cur), 1);
  }

  console.log((idx + 1n).toString());
}
