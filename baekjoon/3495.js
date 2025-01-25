const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [wh, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [h, w] = wh.split(' ').map(Number);

let area = 0;
for (let i = 0; i < h; i++) {
  let isInside = false;
  for (let j = 0; j < w; j++) {
    if (input[i][j] === '/' || input[i][j] === '\\') {
      isInside = !isInside;
    }
    if (isInside) {
      area++;
    }
  }
}
console.log(area);
