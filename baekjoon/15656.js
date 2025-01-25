const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const nums = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

//
const arr = [];
const answer = [];

function func(k) {
  // base code
  if (k === m) {
    let result = [];
    for (let i = 0; i < m; i++) {
      result.push(arr[i]);
    }
    answer.push(result.join(' '));
    return;
  }

  for (let i = 0; i < n; i++) {
    arr[k] = nums[i];
    func(k + 1);
  }
}
func(0);
console.log(answer.join('\n'));
