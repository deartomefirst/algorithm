let [nums, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
const [n, m] = nums
  .trim()
  .split(' ')
  .map((v) => +v);
arr = arr.map((v) =>
  v
    .trim()
    .split(' ')
    .map((v) => +v)
);

const visited = [];

for (let i = 0; i < n; i++) {
  visited.push(new Array(m).fill(0));
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let queue = [];
let max = 0;
let num = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === 0 || visited[i][j] === 1) continue;
    num++;
    visited[i][j] = 1;
    console.log(typeof visited);
    console.log(visited);
    queue.push([i, j]);

    let area = 0;
    while (queue.length > 0) {
      area++;
      let [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (visited[nx][ny] || arr[nx][ny] !== 1) continue;
        // 위 코드랑 비교하면 편하다
        // if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        // if (arr[nx][ny] === 1) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);

        // }
      }
    }

    max = Math.max(max, area);
  }
}
console.log(num + '\n' + max);



// const visited = Array(n).fill(Array(m).fill(0));
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
//     if (arr[i][j] === 0 || visited[i][j]) continue;
//     numImg++;
//   }
// }


