const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

for (let i = 1; i < input.length; i++) {
  let num = input[i].split(' ')[1];
  let octal = /^[0-7]+$/.test(num) ? parseInt(num, 8) : 0;
  let decimal = parseInt(num, 10);
  let hexadecimal = parseInt(num, 16);
  console.log(i, octal, decimal, hexadecimal);
}
