const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const [num, ...arr] = input[i].split(' ').map((v) => +v);
  dfs([], arr, 0);
  answer.push('');
}

function dfs(current, arr, start) {
  if (current.length === 6) {
    answer.push(current.join(' '));
    return;
  }
  for (let i = start; i < arr.length; i++) {
    current.push(arr[i]);
    dfs(current, arr, i + 1);
    current.pop();
  }
}

console.log(answer.join('\n').trim());
