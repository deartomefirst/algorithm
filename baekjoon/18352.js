const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nmkx, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m, k, x] = nmkx.split(' ').map(Number);

const roads = [...Array(n + 1)].map(() => []);
const dist = Array(n + 1).fill(-1);
arr.forEach((v) => {
  let [a, b] = v.split(' ').map(Number);
  roads[a].push(b);
});
let answer = [];

function bfs(start) {
  let temp = [start];
  dist[start] = 0;

  while (temp.length) {
    const now = temp.shift();
    if (dist[now] === k) {
      answer.push(now);
      continue;
    }
    for (const next of roads[now]) {
      if (dist[next] === -1) {
        temp.push(next);
        dist[next] = dist[now] + 1;
      }
    }
  }
}

bfs(x);
if (answer.length) {
  console.log(answer.sort((a, b) => a - b).join('\n'));
} else {
  console.log(-1);
}
