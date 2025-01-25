const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let answer = 1001;
for (let i = 0; i < +N; i++) {
  let [A, B] = input[i].split(' ').map(Number);
  if (A <= B) {
    answer = Math.min(answer, B);
  }
}

console.log(answer === 1001 ? -1 : answer);
