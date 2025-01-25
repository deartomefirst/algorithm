const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const num = +require('fs').readFileSync(filePath, 'utf-8').trim();

let count = 0;

function fibo(n) {
  let f = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
    count++;
  }
  return f[n];
}

console.log(fibo(num), count);
