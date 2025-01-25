const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = +input[0];
const m = +input[1];

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
for (let i = 2; i < 2 + m; i++) {
  const [from, to, time] = input[i].split(' ').map(Number);
  if (graph[from][to] < time) {
    graph[from][to] = time;
  }
}

// visited로 갔던 길을 체크해도
let max = 0;
let arr = [0];
let visited = Array(n + 1).fill(false);
function backtrack(k, currentSum) {
  if (k === n + 1) {
    if (graph[arr[k - 1]][0] > 0) {
      max = Math.max(max, currentSum + graph[arr[k - 1]][0]);
    }
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i] && graph[arr[k - 1]][i] > 0) {
      arr[k] = i;
      visited[i] = true;
      backtrack(k + 1, currentSum + graph[arr[k - 1]][i]);
      visited[i] = false;
    }
  }
}
backtrack(1, 0);
console.log(max === 0 ? -1 : max);
