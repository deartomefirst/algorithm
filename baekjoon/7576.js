const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [size, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [column, row] = size
  .trim()
  .split(' ')
  .map((v) => +v);

const tomatoes = arr.map((v) => v.split(' ').map((v) => +v));

let queue = [];

for (let i = 0; i < row; i++) {
  for (let j = 0; j < column; j++) {
    if (tomatoes[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

let max = 0;
let index = 0;

while (queue.length > index) {
  let [x, y] = queue[index++];
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= row || ny >= column) continue;
    if (tomatoes[nx][ny] >= 1 || tomatoes[nx][ny] === -1) continue;
    tomatoes[nx][ny] = tomatoes[x][y] + 1;
    max = Math.max(max, tomatoes[x][y]);
    queue.push([nx, ny]);
  }
}
for (let i = 0; i < row; i++) {
  if (tomatoes[i].includes(0)) {
    max = -1;
    break;
  }
}

console.log(max);
// let result = 0;
// let is0 = false;
// for (let i = 0; i < row; i++) {
//   for (let j = 0; j < column; j++) {
//     result = result < dateArray[i][j] ? dateArray[i][j] : result;
//     if (dateArray[i][j] === -1) {
//       result = -1;
//       is0 = true;
//       break;
//     }
//   }
//   if (is0) break;
// }
// console.log(result === -1 ? -1 : result - 1);

/*

행렬을 헷갈리지 않도록!!! [][]에 행렬과 x값과 y값의 범위를 다룰 때 값이 반대가 된다.
굳이 변수를 만들지 않아도...


shift는 시간 초과 발생함
*/
