const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [w, h] = input[0].split(' ').map(Number);
let [x, y] = input[1].split(' ').map(Number);
let time = parseInt(input[2]);

let dx = 1;
let dy = 1;
let preX, preY;
let distanceX, distanceY;

while (time > 0) {
  preX = dx;
  preY = dy;
  distanceX = dx === 1 ? w - x : x;
  distanceY = dy === 1 ? h - y : y;

  if (distanceX < distanceY) {
    x += dx === 1 ? distanceX : -distanceX;
    y += dy === 1 ? distanceX : distanceX;
    dx = -dx;
    time -= distanceX;
  } else if (distanceX > distanceY) {
    x += dx === 1 ? distanceY : -distanceY;
    y += dy === 1 ? distanceY : distanceY;
    dy = -dy;
    time -= distanceY;
  } else {
    x += dx === 1 ? distanceX : -distanceX;
    y += dy === 1 ? distanceX : distanceX;
    dx = -dx;
    dy = -dy;
    time -= distanceX;
  }
  // if (x === w && y === h) {
  //   dx = -dx;
  //   dy = -dy;
  // } else if (x === 0 && y === 0) {
  //   now = dx;
  // } else if (x === 0 || x === w) {
  //   dx = -dx;
  // } else if (y === 0 || y === h) {
  //   dy = -dy;
  // }
  // x += dx;
  // y += dy;
  // time -= 1;
  console.log(x, y, 'hi');
}

if (time < 0) {
  x += preX * time;
  x += preY * time;
  console.log(x, y, 'hh');
}

console.log(x, y);
