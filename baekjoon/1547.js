const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const balls = [0, 1, 0, 0];
for (let i = 0; i < +N; i++) {
  const [x, y] = input[i].split(' ').map(Number);


  let temp = balls[x];
  balls[x] = balls[y];
  balls[y] = temp;
}

for (let i = 1; i <= 3; i++) {
  if (balls[i] === 1) {
    console.log(i);
    break;
  }
}