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
// 존재 여부를 확인하려면...? set이나 object를 사용하자.
let dic = new Set();

function func(k) {
  // base code
  if (k === m) {
    let result = '';
    for (let i = 0; i < m; i++) {
      result += arr[i] + ' ';
    }
    let trimResult = result.trim();
    if (!dic.has(trimResult)) {
      answer.push(trimResult);
      dic.add(trimResult);
    }
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!isUsed[i]) {
      arr[k] = nums[i];
      isUsed[i] = 1;
      func(k + 1);
      isUsed[i] = 0;
    }
  }
}
func(0);
console.log(answer.join('\n'));
