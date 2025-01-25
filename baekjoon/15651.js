const [n, m] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split(' ')
  .map((v) => +v);

let arr = [];
// let isUsed = Array(n + 1).fill(0);
let answer = [];
function dfs(k) {
  if (k === m) {
    let result = '';
    for (let i = 0; i < m; i++) {
      result += arr[i] + ' ';
    }
    answer.push(result.trim());
    return;
  }
  // Console을 한번에 출력하는 방법을 사용해보자.

  for (let i = 1; i <= n; i++) {
    // if (!isUsed[i]) {
    arr[k] = i;
    // isUsed[i] = 1;
    dfs(k + 1);
    // isUsed[i] = 0;
    // }
  }
}
dfs(0);
console.log(answer.join('\n'));
// 시간초과;; 백트래킹으로 불릴만한 요소들이 사용되지 않았음...
