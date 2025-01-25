const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const n = +N;
const nodes = input.map((v) => v.split(' ').map(Number));

let graph = {};
let depth = Array(n + 1).fill(-1);
let leafs = [];

for (let i = 0; i < nodes.length; i++) {
  let [a, b] = nodes[i];
  graph[a] = graph[a] || [];
  graph[b] = graph[b] || [];
  graph[a].push(b);
  graph[b].push(a);
}

let temp = [1];
depth[1] = 0;
let index = 0;

while (temp.length > index) {
  let node = temp[index++];
  let newNodes = graph[node];
  let isAdded = false;

  for (let i = 0; i < newNodes.length; i++) {
    if (depth[newNodes[i]] !== -1) continue;

    temp.push(newNodes[i]);
    isAdded = true;
    depth[newNodes[i]] = depth[node] + 1;
  }
  if (!isAdded) {
    leafs.push(node);
  }
}

console.log(
  leafs.reduce((prev, val) => depth[val] + prev, 0) % 2 === 0 ? 'No' : 'Yes'
);

// 1의 자식으로 적혀있는 부분을 2로 적자.
// temp에 넣고 이런 식으로 계속 돌리면서 계속 값을 넣어주고
// leaf에 해당하는 부분의 depth를 다 더해서 2로 나눠지면 NO, 나머지가 1이면 YES

// root에서 leafs까지의 길이의 합을 구하자. 2 2
