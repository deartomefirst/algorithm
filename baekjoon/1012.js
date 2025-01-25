/*

값을 줄로 받아오는 경우에는 readline을 사용하는게 좋을 것 같다...

*/
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const testCase = parseInt(input[0]);

let lineIndex = 1;
for (let t = 0; t < testCase; t++) {
  const [M, N, K] = input[lineIndex++].split(' ').map((v) => +v);
  let visited = Array.from({ length: N }, () => Array(M).fill(false));
  let board = Array.from({ length: N }, () => Array(M).fill(0));

  // 배추의 위치 설정
  for (let i = 0; i < K; i++) {
    const [x, y] = input[lineIndex].split(' ').map((v) => +v);
    board[y][x] = 1;
    lineIndex++;
  }
  let queue = [];
  let res = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1 && !visited[i][j]) {
        bfs(i, j, M, N, queue, visited, board);
        res++;
      }
    }
  }
  console.log(res);
}

function bfs(x, y, m, n, queue, visited, board) {
  visited[x][y] = true;
  queue.push([x, y]);
  while (queue.length) {
    const [nowX, nowY] = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
      const newX = nowX + dx[dir];
      const newY = nowY + dy[dir];
      if (newX < 0 || newX >= n || newY < 0 || newY >= m) continue;
      if (visited[newX][newY] || board[newX][newY] !== 1) continue;
      visited[newX][newY] = true;
      queue.push([newX, newY]);
    }
  }
}

/*

m,n 관리
bfs 함수에 매개변수를 너무 많이 사용한다. -> 전역변수로 어떻게 뺄까?

*/
