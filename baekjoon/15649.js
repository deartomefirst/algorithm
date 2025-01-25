const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, m] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let arr = Array(n + 1).fill(0);
let isUsed = Array(n + 1).fill(0);
let answer = [];
function dfs(k) {
  if (k === m) {
    let result = [];
    for (let i = 0; i < m; i++) {
      result.push(arr[i]);
    }
    answer.push(result.join(' '));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!isUsed[i]) {
      arr[k] = i;
      isUsed[i] = 1;
      dfs(k + 1);
      isUsed[i] = 0;
    }
  }
}
dfs(0);
console.log(answer.join('\n'));
