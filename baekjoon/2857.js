const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const arr = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
let answer = [];

arr.forEach((v,i) => {
  if (v.includes('FBI')) {
    answer.push(i + 1);
  }
});

console.log(answer.length === 0 ? 'HE GOT AWAY!' : answer.join(' '));