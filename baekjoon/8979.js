const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nk, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [n, k] = nk.split(' ').map(Number);
const sorted = input
  .map((v) => v.split(' ').map(Number))
  .sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[2] > b[2]) return -1;
    if (a[2] < b[2]) return 1;
    if (a[3] > b[3]) return -1;
    if (a[3] < b[3]) return 1;
  });
let rank = 1;
let isSame = 0;

for (let i = 0; i < n; i++) {
  if (sorted[i][0] === k) {
    console.log(rank);
    break;
  }
  if (sorted[i].slice(1).join('') !== sorted[i + 1].slice(1).join('')) {
    rank += isSame + 1;
    isSame = 0;
  } else {
    isSame++;
  }
}
