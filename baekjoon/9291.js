const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let idx = 0;
let T = +input[idx++];
let answer = [];
for (let t = 0; t < T; t++) {
  let arr = [];
  for (let i = idx; i < idx + 9; i++) {
    arr.push(input[i].split(' ').map(Number));
  }
  answer.push(`Case ${t + 1}: ${isSdoku(arr)}`);
  idx += 10;
}
console.log(answer.join('\n'));

function isSdoku(arr) {
  let isCorrect = true;
  // 가로를 확인하는 방법
  for (let i = 0; i < 9; i++) {
    let set = new Set(arr[i]);
    if (set.size !== 9) return 'INCORRECT';
  }
  // 세로를 확인하는 방법
  for (let i = 0; i < 9; i++) {
    let visited = Array(9).fill(false);
    for (let j = 0; j < 9; j++) {
      if (visited[arr[j][i] - 1]) return 'INCORRECT';
      visited[arr[j][i] - 1] = true;
    }
  }
  // 정사각형 범위를 확인하는 방법
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let visited = Array(9).fill(false);
      for (let m = i; m < i + 3; m++) {
        for (let n = j; n < j + 3; n++) {
          if (visited[arr[m][n] - 1]) return 'INCORRECT';
          visited[arr[m][n] - 1] = true;
        }
      }
    }
  }
  return 'CORRECT';
}
