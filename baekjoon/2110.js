const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nc, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, c] = nc.split(' ').map(Number);
const arr = input.map(Number).sort((a, b) => a - b);
let start = 1;
let end = arr[n - 1] - arr[0];

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  let count = 1;
  let prev = arr[0];

  for (const cur of arr) {
    if (cur - prev < mid) continue;
    prev = cur;
    count += 1;
  }

  if (count < c) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
console.log(end);
