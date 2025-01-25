let [N, ...matrix] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

matrix = matrix.map((v) =>
  v
    .trim()
    .split(' ')
    .map((v) => +v)
);

let nums = [0, 0, 0];

function countPaper(num, startX, startY) {
  const firstValue = matrix[startX][startY];
  for (let i = startX; i < startX + num; i++) {
    for (let j = startY; j < startY + num; j++) {
      if (matrix[i][j] !== firstValue) {
        // 9개의 시작점에서 countPaper 실행
        for (let m = 0; m < 3; m++) {
          for (let n = 0; n < 3; n++) {
            countPaper(
              parseInt(num / 3),
              startX + parseInt(num / 3) * m,
              startY + parseInt(num / 3) * n
            );
          }
        }
        return;
      }
    }
  }
  if (firstValue === -1) {
    nums[0]++;
  } else if (firstValue === 0) {
    nums[1]++;
  } else if (firstValue === 1) {
    nums[2]++;
  }
}
countPaper(+N, 0, 0);
console.log(nums.join('\n'));

