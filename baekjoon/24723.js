const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = +require('fs').readFileSync(filePath, 'utf-8').trim();

console.log(Math.pow(2, N));
