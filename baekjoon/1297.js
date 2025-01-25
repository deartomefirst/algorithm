const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [D, H, W] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);
let ratio = Math.sqrt(D ** 2 / (H ** 2 + W ** 2));
console.log(Math.floor(ratio * H), Math.floor(ratio * W));
