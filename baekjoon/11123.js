const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
let T = +input[0];
let idx = 1;
let result = [];

while (T--) {
  const [H, W] = input[idx++].split(' ').map(Number);
  let arr = [];

  for (let i = 0; i < H; i++) {
    arr.push(input[idx++].split(''));
  }

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let visited = Array.from({ length: H }, () => Array(W).fill(0));
  let count = 0;
  let temp = [];
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (arr[i][j] === '#') {
        if (visited[i][j]) continue;
        temp.push([i, j]);
        visited[i][j] = ++count;

        while (temp.length > 0) {
          let [x, y] = temp.pop();

          for (let k = 0; k < 4; k++) {
            let newX = x + dx[k];
            let newY = y + dy[k];

            if (newX < 0 || newY < 0 || newX >= H || newY >= W) continue;
            if (arr[newX][newY] === '.' || visited[newX][newY] > 0) continue;
            temp.push([newX, newY]);
            visited[newX][newY] = count;
          }
        }
      }
    }
  }
  result.push(count);
}

console.log(result.join('\n'));
/*

방문했는지 표시하고
arr 전체를 돌아다니면서 #이면서 방문하지 않은 곳을 찾자.


*/
