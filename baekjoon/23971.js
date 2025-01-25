const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [h, w, n, m] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

/*
세로 N칸 가로 M칸

*/

console.log(
  (1 + Math.floor((h - 1) / (n + 1))) * (1 + Math.floor((w - 1) / (m + 1)))
);
