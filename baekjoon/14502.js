const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
let arr = input.map((v) => v.split(' ').map(Number));

let blank = [];
let virus = [];
let wall = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === 0) {
      blank.push([i, j]);
    } else if (arr[i][j] === 2) {
      virus.push([i, j]);
    } else {
      wall++;
    }
  }
}
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let maxSafeArea = 0;
for (let i = 0; i < blank.length - 2; i++) {
  let [x1, y1] = blank[i];
  arr[x1][y1] = 1;
  for (let j = i + 1; j < blank.length - 1; j++) {
    let [x2, y2] = blank[j];
    arr[x2][y2] = 1;
    for (let k = j + 1; k < blank.length; k++) {
      let [x3, y3] = blank[k];
      arr[x3][y3] = 1;
      let virusArea = virus.length;
      let visited = Array.from({ length: n }, () => Array(m).fill(false));
      let temp = [...virus];
      while (temp.length) {
        const [x, y] = temp.pop();

        for (let l = 0; l < 4; l++) {
          let newX = x + dx[l];
          let newY = y + dy[l];

          if (newX < 0 || newY < 0 || newX >= n || newY >= m) continue;
          if (arr[newX][newY] === 0 && !visited[newX][newY]) {
            temp.push([newX, newY]);
            visited[newX][newY] = true;
            virusArea++;
          }
        }
      }
      let safeArea = n * m - virusArea - (wall + 3);
      if (safeArea > maxSafeArea) {
        maxSafeArea = safeArea;
        // console.log(arr, virusArea);
      }
      // 여기서 bfs를 실행해서 안전 영역의 최대 크기를 출력하자
      // n*m - virusArea - (wall+3)

      arr[x3][y3] = 0;
    }
    arr[x2][y2] = 0;
  }
  arr[x1][y1] = 0;
}
console.log(maxSafeArea);
/*

bfs로 영역을 방문할 때마다 virusArea를 증가시켜서 안전 영역의 최대 값을 기록하자.

*/
