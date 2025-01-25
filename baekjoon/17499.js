const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NQ, arr, ...operations] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [N, Q] = NQ.split(' ').map(Number);
let numArr = arr.split(' ').map(Number);
let move = 0;

for (let i = 0; i < Q; i++) {
  const operation = operations[i].split(' ').map(Number);
  const type = operation[0];

  if (type === 1) {
    const [type, idx, num] = operation;
    const index = move + idx - 1;
    if (index >= N) {
      numArr[index - N] += num;
    } else {
      numArr[index] += num;
    }
  } else if (type === 2) {
    const [_, shiftNum] = operation;
    move = (move - shiftNum + N) % N;
  } else {
    const [_, shiftNum] = operation;
    move = (move + shiftNum) % N;
  }
}
let result = [];
for (let i = 0; i < N; i++) {
  const idx = (i + move) % N;
  result.push(numArr[idx]);
}

console.log(result.join(' '));
