const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const numInput = input.map(Number);
console.log(numInput[0] + numInput[1] - numInput[2]);
console.log(input[0] + input[1] - input[2]);
