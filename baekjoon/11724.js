const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [N, M] = NM.split(' ').map(Number);

const graph = Array.from(Array(N + 1), () => []);
const visited = Array(N + 1).fill(0);
input
  .map((v) => v.split(' ').map(Number))
  .forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

let count = 0;
for (let i = 1; i < visited.length; i++) {
  if (visited[i] !== 0) continue;
  const queue = [i];
  while (queue.length) {
    const node = queue.pop();
    if (visited[node] === 0) {
      visited[node] = i;
      queue.push(...graph[node]);
    }
  }
  count += 1;
}
console.log(count);
