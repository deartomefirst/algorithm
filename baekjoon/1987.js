const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [RC, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [R, C] = RC.split(' ').map(Number);

const field = input.map((v) => v.split(''));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let visited = Array(26).fill(false);

let maxLength = 1;
let count = 0;

function dfs(x, y, length) {
  // 이미 밟은 알파벳이면 set의 크기 비교를 하고 reset
  maxLength = Math.max(maxLength, length);

  for (let i = 0; i < 4; i++) {
    let newX = x + dx[i];
    let newY = y + dy[i];

    // 이동하는 곳이 값이 index를 넘어갈 때
    if (newX < 0 || newY < 0 || newX >= R || newY >= C) continue;
    let charIndex = field[newX][newY].charCodeAt(0) - 'A'.charCodeAt(0);
    if (!visited[charIndex]) {
      visited[charIndex] = true;
      dfs(newX, newY, length + 1);
      visited[charIndex] = false;
    }
  }
}
let startCharIdx = field[0][0].charCodeAt(0) - 'A'.charCodeAt(0);
visited[startCharIdx] = true;
dfs(0, 0, 1);
console.log(maxLength);
/*


dfs
더이상 움직일 수 없을 때를 찾아서 출력한다.





*/
