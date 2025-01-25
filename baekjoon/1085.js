const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [x, y, w, h] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

console.log(Math.min(x, y, w - x, h - y));
