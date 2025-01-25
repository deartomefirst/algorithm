const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const answer = [];

for (const num of input) {
  if (num <= 2) {
    answer.push(2);
  } else {
    let larger = num;
    if (larger % 2 === 0) larger++;
    while (!isPrime(larger)) {
      larger += 2;
    }
    answer.push(larger);
  }
}
console.log(answer.join('\n'));
