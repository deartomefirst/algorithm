const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let arr = [];
let isUsed = Array(n).fill(0);
let answer = [];
function func(k) {
  // base code
  if (k === m) {
    let result = '';
    for (let i = 0; i < m; i++) {
      result += arr[i] + ' ';
    }
    answer.push(result.trim());
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!isUsed[i]) {
      if (k === 0 || arr[k - 1] <= nums[i]) {
        arr[k] = nums[i];
        isUsed[i] = 1;
        func(k + 1);
        isUsed[i] = 0;
      }
    }
  }
}
func(0);
console.log(answer.join('\n'));
