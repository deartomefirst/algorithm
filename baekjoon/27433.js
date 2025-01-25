const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = BigInt(+require('fs').readFileSync(filePath, 'utf-8').trim());

function fac(n) {
  if (n === 1n || n === 0n) return 1n;
  return n * fac(n - 1n);
}

console.log(fac(N).toString());
