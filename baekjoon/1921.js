const fs = require('fs');
let [num, arr] = fs.readFileSync('input.txt').toString().split('\n');
arr = arr.split(' ').map((v) => +v);

let maxSum = arr[0];
let currentSum = arr[0];

for (let i = 1; i < num; i++) {
  currentSum = Math.max(arr[i], currentSum + arr[i]);
  maxSum = Math.max(maxSum, currentSum);
}
console.log(maxSum);
