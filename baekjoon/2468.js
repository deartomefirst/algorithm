const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const N = +n;
let highInfo = new Set();
const area = input.map((v) => {
  let arr = v.split(' ').map(Number);
  highInfo = new Set([...highInfo, ...arr]);
  return arr;
});

function countSafeArea(area, high, N) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let safeArea = 0;
  // 높이는 1이하의 정수

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let temp = [];
      // 안전 높이보다 낮은 경우 visited에 표시하고 다음 곳으로 이동
      if (area[i][j] <= high) {
        visited[i][j] = true;
        continue;
      }
      // 방문한 지역이면 넘어가기!
      if (visited[i][j]) continue;
      // 안전 높이보다 높은 경우 주변에 연결되어 있는 높은 지역을 모두 표시해준다.
      temp.push([i, j]);
      safeArea++;
      while (temp.length) {
        // 사방으로 뻗어나가며 이미 방문한 곳이거나 높이가 낮은 곳이면 x
        let [x, y] = temp.pop();
        for (let k = 0; k < 4; k++) {
          let newX = x + dx[k];
          let newY = y + dy[k];

          if (newX < 0 || newY < 0 || newX >= N || newY >= N) continue;
          if (visited[newX][newY]) continue;
          if (area[newX][newY] <= high) {
            visited[newX][newY] = true;
            continue;
          }
          temp.push([newX, newY]);
          visited[newX][newY] = true;
        }
      }
    }
  }
  return safeArea;
}

const answer = [];
for (let high of highInfo) {
  answer.push(countSafeArea(area, high, N));
}
console.log(Math.max(...answer) === 0 ? 1 : Math.max(...answer));
console.log(Math.max(...answer));
// 반례를 생각해보자
