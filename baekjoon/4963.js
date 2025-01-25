const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let idx = 0;
let dx = [1, 0, -1, 0, 1, -1, 1, -1];
let dy = [0, 1, 0, -1, 1, -1, -1, 1];
let answer = [];

while (idx < input.length - 1) {
  let [w, h] = input[idx++].split(' ').map(Number);
  let map = [];
  for (let i = 0; i < h; i++) {
    map.push(input[idx++].split(' ').map(Number));
  }
  let city = 0;
  for (let m = 0; m < h; m++) {
    for (let n = 0; n < w; n++) {
      if (map[m][n] === 1) {
        let temp = [[m, n]];
        city++;
        while (temp.length !== 0) {
          let [x, y] = temp.pop();
          map[x][y] = -1;
          for (let i = 0; i < 8; i++) {
            let newX = x + dx[i];
            let newY = y + dy[i];
            if (newX < 0 || newY < 0 || newX >= h || newY >= w) continue;
            if (map[newX][newY] !== 1) continue;
            temp.push([newX, newY]);
          }
        }
      }
    }
  }
  answer.push(city);
}
console.log(answer.join('\n'));
