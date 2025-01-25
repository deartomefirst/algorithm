const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);

/*

다시 천천히 세워보자...

10 20 10 30 20 50


dp를 할 때는 어떻게 돌릴 지 고민해보자.

*/
