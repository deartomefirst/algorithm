const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const answer = [];
for (let i = 0; i < +T; i++) {
  let [n, ...arr] = input[i].split(' ').map(Number);
  answer.push(calOverAverage(n, arr));
}
console.log(answer.join('\n'));

function calOverAverage(n, arr) {
  let avg = arr.reduce((acc, v) => acc + v, 0) / n;
  let overNum = arr.filter((v) => v > avg).length;
  return `${(Math.round((overNum / n) * 100 * 1000) / 1000).toFixed(3)}%`;
}
