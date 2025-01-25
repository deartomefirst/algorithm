const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +require('fs').readFileSync(filePath, 'utf-8').trim();

let fib = [0, 1];

for (let i = 2; i <= n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib[n]);
