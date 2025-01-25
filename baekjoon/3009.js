const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const points = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

// 축에 ⭐️평행한⭐️

let xCoor = [];
let yCoor = [];

for (let i = 0; i < points.length; i++) {
  let [x, y] = points[i].split(' ').map(Number);
  xCoor.push(x);
  yCoor.push(y);
}

let restX =
  xCoor[0] === xCoor[1]
    ? xCoor[2]
    : xCoor[0] === xCoor[2]
    ? xCoor[1]
    : xCoor[0];
let restY =
  yCoor[0] === yCoor[1]
    ? yCoor[2]
    : yCoor[0] === yCoor[2]
    ? yCoor[1]
    : yCoor[0];

console.log(restX, restY);
