const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const num = +input[0];
const tArr = input[1].split(' ').map(Number);
const [T, P] = input[2].split(' ').map(Number);

console.log(
  tArr.reduce((acc, cur) => {
    if (cur % T === 0) {
      return acc + cur / T;
    } else {
      return acc + Math.floor(cur / T) + 1;
    }
  }, 0)
);
console.log(Math.floor(num / P), num % P);
