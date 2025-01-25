const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [t, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const answer = [];
for (let i = 0; i < +t; i++) {
  if (arr[i].at(-1) === '0') {
    answer.push(1);
  } else {
    answer.push(0);
  }
}
console.log(answer.join('\n'));
