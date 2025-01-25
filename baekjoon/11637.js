const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

let idx = 0;
let T = input[idx++];
const answer = [];
while (T--) {
  const num = input[idx++];
  let max = idx;
  let maxCount = 1;
  let votes = input[max];
  for (let i = 1; i < num; i++) {
    if (input[max] < input[idx + i]) {
      max = idx + i;
      maxCount = 1;
    } else if (input[max] === input[idx + i]) {
      maxCount++;
    }
    votes += input[idx + i];
  }

  if (maxCount > 1) {
    answer.push('no winner');
  } else {
    if (Math.floor(votes / 2) >= input[max]) {
      answer.push(`minority winner ${max - idx + 1}`);
    } else {
      answer.push(`majority winner ${max - idx + 1}`);
    }
  }
  idx += num;
}
console.log(answer.join('\n'));
