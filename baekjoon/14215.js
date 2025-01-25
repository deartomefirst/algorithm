const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const arr = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

const [a, b, c] = arr.sort((a, b) => a - b);

if (a === c) console.log(3 * a);
else {
  if (a + b > c) {
    console.log(a + b + c);
  } else {
    console.log((a + b) * 2 - 1);
  }
}
