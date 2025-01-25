const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [NM, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [N, M] = NM.split(' ').map(Number);

let arr = input.map((v) => v.split(' ').map(Number));
let visited = Array.from({ length: M }, () => Array(N).fill(0));

let dx = [1, 0];
let dy = [0, 1];

let result = [[0, 0]];
visited[0][0] = 1;

while (result.length !== 0) {
  let [x, y] = result.pop();
  for (let i = 0; i < 2; i++) {
    let newX = x + dx[i];
    let newY = y + dy[i];

    if (
      newX >= M ||
      newY >= N ||
      arr[newX][newY] === 0 ||
      visited[newX][newY] === 1
    )
      continue;
    visited[newX][newY] = 1;
    result.push([newX, newY]);
  }
}
if (visited[M - 1][N - 1] === 1) console.log('Yes');
else console.log('No');

/*

방문했다.


*/
