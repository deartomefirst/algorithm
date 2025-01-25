/*

원래 배열 [][]
사각지대 [][]

dxdy로 방향 돌리기

갈 수 있는지 확인하는 함수






*/

const [nums, ...input] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

const [N, M] = nums.split(' ').map((v) => +v);
const arr = Array.from(new Array(N), () => new Array(N).fill(0));
const visited = Array.from(new Array(N), () => new Array(N).fill(0));
let cctv = [];
// arr에 input 값 넢어주기
for (let i = 0; i < N; i++) {
  arr[i] = input[i]
    .trim()
    .split(' ')
    .map((v) => +v);
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] !== 0 && arr[i][j] !== 6) cctv.push([i, j]);
  }
}
console.log(cctv);

for (let i = 0; i < 4 ** cctv.length; i++) {
  // 방문기록 초기화
  for (let k = 0; k < N; k++) {
    for (let l = 0; l < M; l++) {
      visited[k][l] = arr[i][j];
    }
  }
  // cctv의 갯수대로 방문했는지 확인시키기 위해 돌리는 거
  for (let j = 0; j < cctv.length; j++) {}
}
/*

dir 방향

dir = 1
1, 0을 계속 더하면서 visited를 바꿈
-> 이걸 4번

dir = 2




숫자가 1이면
정해진 방향에 따라 한 방향으로 (6이나, 범위를 벗어날 때까지) visited를 바꿔준다.

숫자가 2이면
정해진 방향과 그 반대 방향으로 visited를 바꿔준다.

숫자가 3이면
비슷하게

숫자가 4면
비슷하게

숫자가 5면
비슷하게



1로 3개가 있다고 치면
[1,2][2,3][5,6]



*/
