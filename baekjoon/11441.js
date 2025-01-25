const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, arr, M, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const numArr = arr.split(' ').map(Number);
const accArr = Array(+N + 1).fill(0);
for (let i = 1; i <= +N; i++) {
  accArr[i] = accArr[i - 1] + numArr[i - 1];
}
const answer = [];
for (let i = 0; i < +M; i++) {
  let [s, f] = input[i].split(' ').map(Number);
  answer.push(accArr[f] - accArr[s - 1]);
}

console.log(answer.join('\n'));
