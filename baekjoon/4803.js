const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let idx = 0;
const answer = [];
let caseNum = 1;
while (idx !== input.length - 1) {
  let [n, m] = input[idx++].split(' ').map(Number);
  const graph = {};
  while (m--) {
    let [from, to] = input[idx++].split(' ').map(Number);
    graph[from] = graph[from] || [];
    graph[from].push(to);
  }

  answer.push(`Case ${caseNum++}: ${countTree(n, graph)}`);
}
console.log(answer.join('\n'));

/*

주어진 객체에 tree가 몇개 존재하는지 구하는 함수가 필요하다.

*/

function countTree(n, graph) {
  let count = 0;
  let visited = Array(n + 1).fill(false);

  // 연결된 모든 정점들을 확인하고 false가 몇개인지 세어 트리 갯수에 추가해주자

  for (let i = 1; i <= n; i++) {
    // 방문한 정점이라면 continue
    if (visited[i]) {
      continue;
    }
    // 간선의 시작점이 아니라면 넘기자.
    if (graph[i] === undefined) {
      continue;
    }
    let temp = [...graph[i]];
    console.log(temp);

    while (temp.length) {
      let now = temp.pop();
      if (!visited[now] && graph[now] !== undefined) {
        graph[now].forEach((v) => {
          temp.push(v);
        });
        visited[now] = true;
      }
    }

    count++;
  }
  if (count > 1) {
    return `A forest of ${count} trees.`;
  } else if (count === 1) {
    return `There is one tree.`;
  } else {
    return 'No trees.';
  }
}
/*

6 3
1 2
2 3
3 4

1 2
2 3
3 4




6 5
1 2
2 3
3 4
4 5
5 6

1 2
2 3
1 3

1 : [2,3]
2 : [3]


4 5
5 6
6 4


1 2
2 3
3 4
4 5
5 6




*/
