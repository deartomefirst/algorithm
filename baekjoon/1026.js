const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [num, firstArr, secondArr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let sortedA = firstArr
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let sortedB = secondArr
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
let result = 0;
for (let i = 0; i < +num; i++) {
  result += sortedA[i] * sortedB[i];
}
console.log(result);
