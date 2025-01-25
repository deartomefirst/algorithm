const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

/*

방문했는지 확인하는 것

    BFS() {
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data; 
    }

    데이터를 어떻게 보관할 지...
    어떻게 꺼내서 사용할지...

    1: [2,5]
    2: [3]
    5: [2,6]
    4: [7]

    방문했었는지 [0 1 0 0 0 0 0]

    오름차순으로 정렬?
    1 2

*/

let linkedObj = {};

for (let i = 2; i < +input[1] + 2; i++) {
  let [start, finish] = input[i]
    .trim()
    .split(' ')
    .map((v) => +v);
  if (linkedObj[start]) {
    linkedObj[start].push(finish);
  } else {
    linkedObj[start] = [finish];
  }
  if (linkedObj[finish]) {
    linkedObj[finish].push(start);
  } else {
    linkedObj[finish] = [start];
  }
}

function bfs(start) {
  let node = start;
  let visited = Array(+input[0] + 1).fill(0);
  let count = 0;
  let queue = [];
  queue.push(node);
  while (queue.length) {
    node = queue.pop();

    if (linkedObj[node] === undefined) continue;
    for (let i = 0; i < linkedObj[node].length; i++) {
      if (visited[linkedObj[node][i]]) {
        continue;
      }
      // index 처리
      visited[linkedObj[node][i]] = 1;
      count++;
      queue.push(linkedObj[node][i]);
    }
  }
  // 본인은 제외
  return count === 0 ? 0 : count - 1;
}

console.log(bfs(1));
