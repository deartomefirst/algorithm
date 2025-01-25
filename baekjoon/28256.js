const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [t, ...input] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const checkCoord = [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [2, 1], [2, 0], [1, 0]];
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const answer = [];


for (let T = 0; T < t; T++) {

  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(input[4 * T + i].split(''));
  }
  let [n, ...a] = input[4 * T + 3].split(' ').map(Number);
  let testCounter = Array(9).fill(0);
  a.forEach(v => testCounter[v]++);

  let visited = Array.from({ length: 3 }, () => Array(3).fill(false));
  let counter = Array(9).fill(0);
  for (let i = 0; i < 8; i++) {
    let [x, y] = checkCoord[i];
    if (arr[x][y] === 'O' && !visited[x][y]) {
      visited[x][y] = true;
      let count = 1;
      let temp = [[x, y]];
      while (temp.length !== 0) {
        let [tempX, tempY] = temp.pop();
        for (let i = 0; i < 4; i++) {
          let newX = tempX + dx[i];
          let newY = tempY + dy[i];

          if (newX < 0 || newY < 0 || newX > 2 || newY > 2) continue;
          if (arr[newX][newY] === 'O' && !visited[newX][newY]) {
            count++;
            visited[newX][newY] = true;
            temp.push([newX, newY]);
          }
        }
      }
      counter[count]++;
    } 
  }
  let isSame = true;
  for (let i = 0; i < 9; i++) {
    if (testCounter[i] !== counter[i]) {
      isSame = false;
      break;
    }
  }
  answer.push(isSame ? 1:0)
}
console.log(answer.join('\n'));
