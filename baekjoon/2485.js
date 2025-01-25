const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

let gcd = input[1] - input[0];

function getGcd(a, b) {
  let large = Math.max(a, b);
  let small = Math.min(a, b);
  return small > 0 ? getGcd(small, large % small) : large;
}

for (let i = 2; i < n; i++) {
  let temp = input[i] - input[i - 1];

  gcd = getGcd(temp, gcd);
  if (gcd === 1) break;
}

console.log((input[n - 1] - input[0]) / gcd - (n - 1));

/*
  2 4 6
  1 2 3

  4 6 6
  2 3 3

최대공약수

gcd(a,b) {
  let large = Math.max(a,b);
  let small = Math.min(a,b);
  return small > 0 ? gcd(small,large%small) : large;
  
}

  */
