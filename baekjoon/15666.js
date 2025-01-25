const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let arr = [];
let answer = [];

function func(k) {
  // base code
  if (k === m) {
    let result = '';
    for (let i = 0; i < m; i++) {
      result += arr[i] + ' ';
    }
    let trimResult = result.trim();
    answer.push(trimResult);
    return;
  }

  let prev = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== prev) {
      if (k === 0 || arr[k - 1] <= nums[i]) {
        arr[k] = nums[i];
        prev = nums[i];
        func(k + 1);
      }
    }
  }
}
func(0);
console.log(answer.join('\n'));
