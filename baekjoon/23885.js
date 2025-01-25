const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const [sX, sY] = input[1].split(' ').map(Number);
const [fX, fY] = input[2].split(' ').map(Number);
let result1 = (sX + sY) % 2;
let result2 = (fX + fY) % 2;
if (n === 1 || m === 1) {
  console.log(sX === fX && sY === fY ? 'YES' : 'NO');
} else console.log(result1 === result2 ? 'YES' : 'NO');
