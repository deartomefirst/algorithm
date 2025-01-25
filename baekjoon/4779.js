const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);
const pattern = { 1: '-', 3: '- -' };
const answer = [];


function cantor(size) {
  if (pattern[size]) return pattern[size];
  else {
    let devide = cantor(size / 3);
    let center = ' '.repeat(size / 3);
    pattern[size] = devide + center + devide;
    return devide + center + devide;
  }
}

for (let i = 0; i < input.length; i++) {
  answer.push(cantor(Math.pow(3, input[i])));
}

console.log(answer.join('\n'));

// 아래 코드가 왜 StackSizeExceeded인지 확실하게 확인해보자!
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const n = +require('fs').readFileSync(filePath, 'utf-8').trim();
// const pattern = { 1: '-', 3: '- -' };

// function cantor(size) {
//   if (pattern[size] !== undefined) {
//     return pattern[size];
//   } else {
//     let left = cantor(size / 3);
//     let center = ' '.repeat(size / 3);
//     pattern[size] = left + center + left;
//     return pattern[size];
//   }
// }

// console.log(cantor(Math.pow(3, n)));
