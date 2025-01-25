const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, b] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

if (a % b === 0) {
  console.log(a);
} else if (b % a === 0) {
  console.log(b);
} else {
  let gcd = getGcd(a, b);
  console.log((a * b) / gcd);
}

function getGcd(a, b) {
  return b > 0 ? getGcd(b, a % b) : a;
}
