const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [input, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [N, M, B] = input.split(' ').map(Number);

const blocks = arr.map((v) => v.split(' ').map(Number));

// 블록을 추가해서 할 수 있는지 확인 먼저?
//
let minTime = Number.MAX_VALUE;
let maxHeight = 0;
let min = 256;
let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    min = Math.min(min, blocks[i][j]);
    max = Math.max(max, blocks[i][j]);
  }
}

// 일정한 높이로 맞추려면 어떻게 해야할까?.?
for (let height = min; height <= max; height++) {
  let time = 0;
  let restBlock = B;
  let isStackable = true;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (blocks[i][j] === height) continue;
      if (blocks[i][j] < height) {
        if (restBlock === 0) {
          isStackable = false;
          break;
        }
        restBlock--;
        time += 1;
      } else {
        time += 2;
        restBlock++;
      }
    }
    if (!isStackable) break;
  }
  if (minTime > time && isStackable) {
    minTime = time;
    maxHeight = height;
  }
}

console.log(minTime, maxHeight);
