const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let setA = new Set(input[1]);
let setB = new Set(input[2]);

let diff = 0;

setA.forEach((v) => {
  if (!setB.has(v)) diff++;
});

setB.forEach((v) => {
  if (!setA.has(v)) diff++;
});

console.log(diff);
