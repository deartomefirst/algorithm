const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const answer = [];
for (let i = 1; i <= +input[0]; i++) {
  let [N, K] = input[i].split(' ').map(Number);

  let now = 0;
  let direction = 1;
  let accLength = 0;
  let length = K;

  while (accLength < N) {
    accLength += length;
    now += direction * length;
    length = length + K;
    direction *= -1;
  }
  if (direction === -1) {
    answer.push([now - (accLength - N + 1), 'R']);
  } else {
    answer.push([now + (accLength - N + 1), 'L']);
  }
}
console.log(answer.map((v) => v.join(' ')).join('\n'));
