const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim();

const callTime = [
  3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10,
  10,
];

let minTime = 0;
for (let i = 0; i < input.length; i++) {
  minTime += callTime[input[i].charCodeAt(0) - 65];
}
console.log(minTime);
