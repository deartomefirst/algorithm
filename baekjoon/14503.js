const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], [r, c, d], ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

// d는 방향 0 북 1 동 2 남 3 서
// arr 에서 0인 경우 청소되지 않은 빈 칸, 1인 경우에 벽이 있는 것
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

