const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const T = +input[0];
for (let i = 0; i < T; i++) {
  let n = +input[3 * i + 1];
  let preArr = input[3 * i + 2].split(' ').map(Number);
  let inArr = input[3 * i + 3].split(' ').map(Number);
}

// 트리 구조에서 왔다갔다 하는 방법을 익히자...
