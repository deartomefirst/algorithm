const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const max = Math.max(...input);

const prime = Array(max)
  .fill(0)
  .map((v, i) => i);

prime[1] = 0;
for (let i = 2; i * i < max; i++) {
  if (prime[i] === 0) continue;
  for (let n = 2 * i; n < max; n += i) {
    prime[n] = 0;
  }
}
const primeArr = prime.filter((v) => v !== 0);
const primeSet = new Set(primeArr);

const answer = [];
for (let i = 0; i < n; i++) {
  let num = input[i];
  let count = 0;

  for (const p of primeArr) {
    if (2 * p > num) break;
    if (primeSet.has(num - p)) count++;
  }

  // for (let j = 2; j <= num / 2; j++) {
  //   if (primeSet.has(j) && primeSet.has(num - j)) count++;
  // }
  answer.push(count);
}
console.log(answer.join('\n'));
/*

12

4까지 배수들을 제외시키자.
2 4 6 8 10 12
3 6 9 12



*/
