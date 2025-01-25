const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// 첫번째 합
let maxSum = 0;
for (let i = 0; i < k; i++) {
  maxSum += arr[i];
}
let currentSum = maxSum;

for (let i = k; i < n; i++) {
  currentSum += arr[i];
  currentSum -= arr[i - k];
  maxSum = Math.max(maxSum, currentSum);
}
console.log(maxSum);
