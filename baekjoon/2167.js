const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i < 1 + N; i++) {
  arr.push(input[i].split(' ').map(Number));
}
const sumArr = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    sumArr[i][j] =
      sumArr[i - 1][j] +
      sumArr[i][j - 1] +
      arr[i - 1][j - 1] -
      sumArr[i - 1][j - 1];
  }
}

const K = +input[1 + N];
const answer = [];
for (let i = 2 + N; i < 2 + N + K; i++) {
  let [a, b, c, d] = input[i].split(' ').map(Number);
  answer.push(
    sumArr[c][d] + sumArr[a - 1][b - 1] - sumArr[a - 1][d] - sumArr[c][b - 1]
  );
}
console.log(answer.join('\n'));

// 1 2 4
// 8 16 32

// 1 1 2 3
// 1 2 1 2
// 1 3 2 3

// [
//   [0, 0, 0, 0],
//   [0, 1, 3, 7],
//   [0, 9, 27, 63],
// ];
