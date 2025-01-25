const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let count = 0;

arr.forEach((v) => {
  if (v % 10 === n) count++;
});
console.log(count);
