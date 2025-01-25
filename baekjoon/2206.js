const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m] = nm.split(' ').map(Number);
const maze = input.map((v) => v.split('').map(Number));
let visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => Array(2).fill(0))
);
visited[0][0][0] = 1;
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function bfs() {
  let temp = [[0, 0, 0]];
  let idx = 0;
  while (idx !== temp.length) {
    const [x, y, isBreak] = temp[idx];

    if (x === n - 1 && y === m - 1) {
      return visited[x][y][isBreak];
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        // 갈 수 없는 길인데 아직 벽을 안부셨다면
        if (maze[nx][ny] === 1 && isBreak === 0) {
          // 방문한 표시를 하면서 벽을 부시고 기록해준다.
          visited[nx][ny][isBreak + 1] = visited[x][y][isBreak] + 1;
          temp.push([nx, ny, isBreak + 1]);
          // 갈 수 있는 길이면서 새로운 곳이 아직 방문하지 않은 곳이라면
        } else if (maze[nx][ny] === 0 && visited[nx][ny][isBreak] === 0) {
          visited[nx][ny][isBreak] = visited[x][y][isBreak] + 1;
          temp.push([nx, ny, isBreak]);
        }
      }
    }
    idx++;
  }
  return -1;
}
console.log(bfs());
/*
가다가 벽 있으면 하나는 괜찮다!!
처음 벽이 만나는 곳까지 최단거리를 구하고 거기서 

벽을 뚫었는지 여부를 체크하는 변수를 만들자

벽의 위치들마다 확인해서 최단거리가 되는 지 확인하면 안되나? -> 쓸데없는 계산이 너무 늘어날 것 같다.

0,0에서 n-1,m-1까지의 최단거리
동시에 벽이 있는 위치까지의 최단거리를 기록 -> 벽을 2개 가야하
*/
