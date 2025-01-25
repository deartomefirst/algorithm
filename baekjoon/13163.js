const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const n = +N;
const arr = input.map((v) => v.split(' '));

let answer = [];

for (let str of arr) {
  str[0] = 'god';
  answer.push(str.join(''));
}
console.log(answer.join('\n'));
