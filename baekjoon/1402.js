const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const T = +input[0];

function isChangeable(a, b) {
  if (b > a + 1) return 'no';
  if (b < a / 2) return 'no';
}






// 12   13


for (let i = 1; i <= T; i++) {
  let [a, b] = T[i].split(' ').map(Number);
  console.log('yes');
}
