const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, xy, m, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [x, y] = xy.split(' ').map(Number);

const family = {};

for (let i = 0; i < +m; i++) {
  let [parent, baby] = arr[i].split(' ').map(Number);
  family[baby] = family[baby] || [];
  family[parent] = family[parent] || [];
  family[baby].push(parent);
  family[parent].push(baby);
}

let visited = Array(+n + 1).fill(false);

let queue = [[x, 0]];
let result = 0;
while (queue.length) {
  let [now, cousinNum] = queue.shift();
  visited[now] = true;
  if (now === y) {
    result = cousinNum;
    break;
  }
  for (let i = 0; i < family[now].length; i++) {
    let next = family[now][i];
    if (visited[next]) continue;
    queue.push([next, cousinNum + 1]);
  }
}
console.log(result === 0 ? -1 : result);
/*

2 1 0
1 0

2 1 0
4 0

*/
