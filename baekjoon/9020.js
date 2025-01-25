const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const answer = [];

const max = Math.max(...input);
const arr = Array.from({ length: max - 1 }, (_, i) => i);
arr[1] = 0;
for (let i = 2; i * i <= max; i++) {
  let num = arr[i];
  if (num !== 0) {
    for (let j = 2 * num; j < max - 1; j += num) {
      arr[j] = 0;
    }
  }
}
const prime = arr.filter((v) => v !== 0);

for (let i = 0; i < n; i++) {
  let sum = input[i];
  let minDiff = sum;
  let x = 0;
  let y = sum;
  for (let i = 0; i < prime.length; i++) {
    if (prime[i] > sum / 2) break;
    if (arr[sum - prime[i]] !== 0) {
      if (minDiff > sum - prime[i] - prime[i]) {
        minDiff = sum - prime[i] - prime[i];
        x = prime[i];
        y = sum - prime[i];
      }
    }
  }
  answer.push(`${x} ${y}`);
}
console.log(answer.join('\n'));
