const [n, m] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split(' ')
  .map((v) => +v);

let arr = [];
let isUsed = Array(n + 1).fill(0);
let result = [];
function dfs(k) {
  if (k === m) {
    let result = '';
    for (let i = 0; i < m; i++) {
      result += arr[i] + ' ';
    }
    console.log(result.trim());
    return;
  }
  let start = k !== 0 ? arr[k - 1] + 1 : 1;
  for (let j = start; j <= n; j++) {
    if (!isUsed[j]) {
      arr[k] = j;
      isUsed[j] = 1;
      dfs(k + 1);
      isUsed[j] = 0;
    }
  }
}
dfs(0);
