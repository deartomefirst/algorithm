const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let arr = input
  .map((v) => v.split(' ').map(Number))
  .sort((a, b) => a[0] - b[0]);

let sum = 0n;
for (let i = 1; i <= +N; i++) {
  sum += BigInt(arr[i - 1][0]) * BigInt(i) + BigInt(arr[i - 1][1]);
}

console.log(sum.toString());
/*

  1부터 N까지의 정수를 넣어서
  fx의 최대값을 만들자.

2x+4 3 10
5x+1 5 26
3x+2 4 14
x+10 2 12
0



  */

// 87점
// let arr = input
//   .map((v) => v.split(' ').map(Number))
//   .sort((a, b) => a[0] - b[0]);

// let sum = 0;
// for (let i = 1; i <= +N; i++) {
//   sum += arr[i - 1][0] * i + arr[i - 1][1];
// }

// console.log(sum);
