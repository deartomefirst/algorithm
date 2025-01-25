const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);
let num = input.length - 1;
let max = Math.max(...input) * 2 + 1;

let prime = Array(max).fill(true);
for (let i = 2; i <= max; i++) {
  for (let j = i * i; j <= max; j += i) {
    if (!prime[j]) continue;
    prime[j] = false;
  }
}
prime[1] = false;
let result = [];
for (let i = 0; i < num; i++) {
  let count = 0;

  for (let j = input[i] + 1; j < input[i] * 2 + 1; j++) {
    if (prime[j]) {
      count += 1;
    }
  }
  result.push(count);
}
console.log(result.join('\n'));
