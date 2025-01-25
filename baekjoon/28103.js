const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let [N, M, X] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

/*

X - 1 * arr[i] > arr[M-1-i] * (N-1)




*/
