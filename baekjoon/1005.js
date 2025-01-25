const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
let index = 0;
let T = input[index++];
let answer = [];
while (T--) {
  let [n, k] = input[index++].split(' ').map(Number);
  // 각 건물들의 건설 비용
  const buildTime = input[index++].split(' ').map(Number);
  const accTime = [0, ...buildTime];

  let priority = Array(n + 1).fill(0);
  const graph = Array.from({ length: n + 1 }, () => []);
  while (k--) {
    let [prev, next] = input[index++].split(' ').map(Number);
    graph[prev].push(next);
    priority[next]++;
  }

  const target = input[index++];

  const queue = [];
  for (let i = 1; i <= n; i++) {
    if (priority[i] === 0) queue.push(i);
  }
  while (queue.length) {
    const cur = queue.shift();

    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      if (accTime[next] < accTime[cur] + buildTime[next - 1]) {
        accTime[next] = accTime[cur] + buildTime[next - 1];
      }
      priority[next]--;

      if (priority[next] === 0) queue.push(next);
    }
  }

  answer.push(accTime[target]);

  // function sumTimeComplete(num) {
  //   while (true) {
  //     if (graph[num].length === 0) {
  //       return buildTime[num];
  //     }
  //     const nextTarget = graph[num].pop();
  //     priority[num] = Math.max(
  //       priority[num],
  //       sumTimeComplete(nextTarget) + buildTime[num - 1]
  //     );
  //   }
  // }

  // let answer = [];
  // for (let i = 1; i <= n; i++) {
  //   if (priority[i] === 0) {
  //     queue.push(i);
  //   }
  // }
  // while (queue.length) {
  //   let now = queue.shift();
  //   answer.push();
  // }
}

console.log(answer.join('\n'));

// 어떻게 기록을 할까...
