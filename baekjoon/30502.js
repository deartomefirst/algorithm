const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, M] = nm.split(' ').map(Number);
const isMove = Array(N).fill(-1);
const isPhotosyn = Array(N).fill(-1);

for (let i = 0; i < M; i++) {
  let [a, b, c] = input[i].split(' ');
  if (b === 'P') {
    isPhotosyn[+a - 1] = +c;
  } else {
    isMove[+a - 1] = +c;
  }
}


let min = 0;
let max = 0;

for (let i = 0; i < N; i++) {
  if (isMove[i] === 1) continue;
  if (isMove[i] === 0 && isPhotosyn[i] === 1) {
    min++;
    max++;
  } else if (isPhotosyn[i] !== 0) {
    max++;
  }
}

console.log(min, max);
