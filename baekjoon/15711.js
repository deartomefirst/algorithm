const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const max = 2000001;

const eratos = Array(max).fill(true);
eratos[0] = false;
eratos[1] = false;
const prime = [];

for (let i = 2; i <= max; i++) {
  if (eratos[i] === true) {
    prime.push(i);
    for (let j = i * 2; j <= max; j += i) {
      eratos[j] = false;
    }
  }
}
function isPrime(num) {
  if (num <= max) return eratos[num];
  else {
    for (let i = 0; i < prime.length; i++) {
      if (num % prime[i] === 0) return false;
    }
    return true;
  }
}

const answer = [];

for (let i = 0; i < T; i++) {
  let [a, b] = arr[i].split(' ').map(Number);
  let sum = a + b;
  answer.push(checkPrime(sum));
}

console.log(answer.join('\n'));

function checkPrime(x) {
  if (x < 4) return 'NO';
  if (x % 2 === 0) return 'YES';
  let y = x - 2;
  if (isPrime(y)) return 'YES';
  return 'NO';
}
