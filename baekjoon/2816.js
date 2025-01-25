const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = +n;
