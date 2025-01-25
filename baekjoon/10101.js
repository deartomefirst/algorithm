const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

function isTriangle(a, b, c) {
  let set = new Set([a, b, c]);
  if (a + b <= c) {
    console.log('Invalid');
  } else if (a === c) {
    console.log('Equilateral');
  } else if (set.size === 2) {
    console.log('Isosceles');
  } else {
    console.log('Scalene');
  }
}

for (let i = 0; i < input.length - 1; i++) {
  let [a, b, c] = input[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  isTriangle(a, b, c);
}
