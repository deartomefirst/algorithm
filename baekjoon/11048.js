const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [N, M] = NM.split(' ').map(Number);
const maze = input.map((v) => v.split(' ').map(Number));
const sumArr = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    sumArr[i][j] =
      maze[i - 1][j - 1] +
      Math.max(sumArr[i - 1][j - 1], sumArr[i - 1][j], sumArr[i][j - 1]);
  }
}
console.log(sumArr[N][M]);
