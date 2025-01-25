const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [N, S] = input[0].split(' ').map((v) => +v);
const arr = input[1].split(' ').map((v) => +v);
const arrSum = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  arrSum[i] = arrSum[i - 1] + arr[i - 1];
}
let minLength = N + 1;

if (arrSum[N] >= S) {
  let s = 0;
  let f = 1;
  while (s < f && f <= N) {
    if (arrSum[f] - arrSum[s] >= S) {
      minLength = Math.min(minLength, f - s);
      s++;
    } else {
      f++;
    }
  }
}
console.log(minLength === N + 1 ? 0 : minLength);
