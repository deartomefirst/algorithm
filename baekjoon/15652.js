const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, m] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let arr = [];
let answer = [];
function func(k) {
  if (k === m) {
    let result = '';
    for (let i = 0; i < m; i++) {
      result += arr[i] + ' ';
    }
    answer.push(result.trim());
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (k === 0 || arr[k - 1] <= i) {
      arr[k] = i;
      func(k + 1);
    }
  }
}
func(0);
console.log(answer.join('\n'));
