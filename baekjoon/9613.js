const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const num = +input[0];
const answer = [];
const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);
for (let i = 1; i <= num; i++) {
  const [n, ...arr] = input[i].split(' ').map(Number);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      sum += gcd(arr[i], arr[j]);
    }
  }
  answer.push(sum);
}
console.log(answer.join('\n'));
