const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n').map(Number);
const sortedArr = input.map((v, i) => [+v, i + 1]).sort((a, b) => b[0] - a[0]);
const map = new Map();
let sum = 0;
for (let i = 0; i < 5; i++) {
  const [key, val] = sortedArr[i];
  map.set(key, val);
}
let answerArr = [];
for (let i = 0; i < 8; i++) {
  if (map.has(input[i])) {
    sum += input[i];
    answerArr.push(map.get(input[i]));
  }
}
console.log(sum + '\n' + answerArr.join(' '));