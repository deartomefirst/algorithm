const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nums, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [n, m] = nums.split(' ').map(Number);
const set = new Set();

for (let i = 0; i < n; i++) {
  set.add(arr[i]);
}

let answer = [];
for (let i = n; i < n + m; i++) {
  if (set.has(arr[i])) {
    answer.push(arr[i]);
  }
}
console.log(answer.length + '\n' + answer.sort().join('\n'));

/*

Set을 사용하고
원소가 존재하는 여부를 확인해서 result에 추가할 수도 있다.


*/
