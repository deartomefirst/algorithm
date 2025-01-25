const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +require('fs').readFileSync(filePath, 'utf-8').trim();

let answer = [];
let visited = Array(n + 1).fill(false);
let arr = [];
function permutation(k) {
  if (k === n) {
    answer.push(arr.join(' '));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr[k] = i;
      permutation(k + 1);
      visited[i] = false;
    }
  }
}
permutation(0);
console.log(answer.join('\n'));
