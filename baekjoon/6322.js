const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

function isRightTriangle(a, b, c) {
  if (a === -1) {
    if (c <= b) return 'Impossible.';
    return 'a = ' + Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2)).toFixed(3);
  }
  if (b === -1) {
    if (c <= a) return 'Impossible.';
    return 'b = ' + Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2)).toFixed(3);
  }
  if (c === -1) {
    return 'c = ' + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(3);
  }
}

for (let i = 0; i < input.length - 1; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);

  if (i === input.length - 1) {
    console.log(`Triangle #${i + 1}` + '\n' + isRightTriangle(a, b, c));
  } else {
    console.log(`Triangle #${i + 1}` + '\n' + isRightTriangle(a, b, c) + '\n');
  }
}
