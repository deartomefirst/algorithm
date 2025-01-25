const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = +input[0];
const parent = input[1].split(' ').map(Number);
const deleteNum = +input[2];

if (parent[deleteNum] === -1) {
  console.log(0);
} else {
  const tree = {};
  for (let i = 0; i < N; i++) {
    tree[parent[i]] = tree[parent[i]] || [];
    tree[parent[i]].push(i);
  }
  let temp = [tree[-1][0]];
  let leaf = 0;
  while (temp.length) {
    let node = temp.pop();

    // 부모노드가 가지고 있는 자식 노드가 하나만 존재하는 경우
    if (node === deleteNum) {
      if (tree[parent[node]].length === 1) leaf++;
      continue;
    }

    if (!tree[node]) {
      leaf++;
      continue;
    }

    for (const child of tree[node]) {
      temp.push(child);
    }
  }
  console.log(leaf);
}
