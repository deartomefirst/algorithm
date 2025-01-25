/*

사탕 게임

상근이는 어렸을 적에 "봄보니 (Bomboni)" 게임을 즐겨했다.
가장 처음에 N×N크기에 사탕을 채워 놓는다. 사탕의 색은 모두 같지 않을 수도 있다. 
상근이는 사탕의 색이 다른 인접한 두 칸을 고른다. 그 다음 고른 칸에 들어있는 사탕을 서로 교환한다. 
이제, 모두 같은 색으로 이루어져 있는 가장 긴 연속 부분(행 또는 열)을 고른 다음 그 사탕을 모두 먹는다.
사탕이 채워진 상태가 주어졌을 때, 상근이가 먹을 수 있는 사탕의 최대 개수를 구하는 프로그램을 작성하시오.


첫째 줄에 보드의 크기 N이 주어진다. (3 ≤ N ≤ 50)
다음 N개 줄에는 보드에 채워져 있는 사탕의 색상이 주어진다. 빨간색은 C, 파란색은 P, 초록색은 Z, 노란색은 Y로 주어진다.
사탕의 색이 다른 인접한 두 칸이 존재하는 입력만 주어진다.


3
CCP
CCP
PPC

3


4
PPPP
CYZY
CCPY
PPCC

4


5
YCPZY
CYZZP
CCPPP
YCYZC
CPPZZ

4




*/
const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const n = parseInt(input[0]);
const candy = input.slice(1).map((v) => v.trim().split(''));

let max = 0;
// max에 연속으로 많이 나온 값의 횟수를 할당하는 함수
function maxCheck() {
  let count;
  for (let i = 0; i < n; i++) {
    count = 1;
    for (let j = 1; j < n; j++) {
      if (candy[i][j - 1] === candy[i][j]) {
        count += 1;
        max = Math.max(count, max);
      } else {
        count = 1;
      }
    }
    count = 1;
    for (let j = 1; j < n; j++) {
      if (candy[j - 1][i] === candy[j][i]) {
        count += 1;
        max = Math.max(count, max);
      } else {
        count = 1;
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j + 1 < n) {
      [candy[i][j], candy[i][j + 1]] = [candy[i][j + 1], candy[i][j]];
      maxCheck();
      [candy[i][j], candy[i][j + 1]] = [candy[i][j + 1], candy[i][j]];
    }
    if (i + 1 < n) {
      [candy[i][j], candy[i + 1][j]] = [candy[i + 1][j], candy[i][j]];
      maxCheck();
      [candy[i][j], candy[i + 1][j]] = [candy[i + 1][j], candy[i][j]];
    }
  }
}
console.log(max);
