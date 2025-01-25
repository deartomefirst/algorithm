const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...change] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

let coins = [25, 10, 5, 1];
let result = [];
for (let i = 0; i < T; i++) {
  let answer = [0, 0, 0, 0];
  let remain = change[i];

  for (let j = 0; j < 4; j++) {
    answer[j] = Math.floor(remain / coins[j]);
    remain = remain % coins[j];
    if (remain === 0) break;
  }
  result.push(answer.join(' '));
}

console.log(result.join('\n'));
