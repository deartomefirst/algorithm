const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [M, N] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

function makePrimes(m, n) {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes = [];
  let sum = 0;
  for (let i = m; i <= n; i++) {
    if (isPrime[i]) {
      sum += i;
      primes.push(i);
    }
  }
  if (primes.length === 0) return -1;
  return sum + '\n' + primes[0];
}

console.log(makePrimes(M, N));
