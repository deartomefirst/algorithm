const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
let inDegree = Array(n + 1).fill(0);
for (let i = 0; i < m; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  inDegree[b] += 1;
}
let answer = [];
let queue = [];
for (let i = 1; i <= n; i++) {
  if (inDegree[i] === 0) {
    queue.push(i);
  }
}
while (queue.length) {
  let now = queue.shift();
  answer.push(now);
  for (let g of graph[now]) {
    inDegree[g] -= 1;
    if (inDegree[g] === 0) {
      queue.push(g);
    }
  }
}

console.log(answer.join(' '));

// 군을 만들고 출력

/*

1 3 5

1 3
2 3

*/
