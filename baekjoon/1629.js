const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [A, B, C] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(BigInt);

function pow(a, b, c) {
  if (b === 1n) return a % c;
  let val = pow(a, b / 2n, c);
  val = (val * val) % c;
  if (b % 2n === 0n) return val;
  return (val * a) % c;
}
console.log(pow(A, B, C).toString());
