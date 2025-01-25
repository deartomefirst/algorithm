const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [L, str] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const r = 31n;
const mod = 1234567891n;

let sum = 0n;
let pow = BigInt(1);
for (let i = 0; i < +L; i++) {
  sum += BigInt(str[i].charCodeAt() - 96) * pow;
  pow *= r;
}

console.log(Number(sum % mod));
