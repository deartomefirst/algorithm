const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

function solution(input) {
  const dx = [1, 0];
  const dy = [0, 1];
  const arr = input.map((v) => v.split(' ').map(Number));
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let temp = [[0, 0]];

  while (temp.length !== 0) {
    let [x, y] = temp.pop();
    let jumpDistance = arr[x][y];
    visited[x][y] = true;

    for (let i = 0; i < 2; i++) {
      let newX = jumpDistance * dx[i] + x;
      let newY = jumpDistance * dy[i] + y;
      if (newX >= N || newY >= N) continue;
      if (visited[newX][newY]) continue;
      if (arr[newX][newY] === -1) return 'HaruHaru';
      temp.push([newX, newY]);
    }
  }
  return 'Hing';
}

console.log(solution(input));

/*
visited를 안쓰면 중복해서 확인하는 경우가 생긴다.
*/
