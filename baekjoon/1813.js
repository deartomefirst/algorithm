const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);

let trueArr = Array(51).fill(0);
arr.forEach((v) => {
  trueArr[v]++;
});
let answer = -1;
for (let i = trueArr.length - 1; i >= 0; i--) {
  if (trueArr[i] === i) {
    answer = i;
    break;
  }
}
console.log(answer);
