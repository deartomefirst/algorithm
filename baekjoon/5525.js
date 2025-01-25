const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, m, s] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const N = +n;
const M = +m;

const pattern = 'IO'.repeat(n) + 'I';
let answer = 0;
for (let i = 0; i < M; i++) {
  if (s[i] === 'I') {
    let isSame = true;
    let sameLength = 1;
    for (let j = 1; j < pattern.length; j++) {
      if (pattern[j] !== s[i + j]) {
        isSame = false;
        break;
      }
      sameLength++;
    }
    if (isSame) {
      answer++;
      i += 1;
    } else {
      if (sameLength < 2) {
        continue;
      } else {
        i += 1;
      }
    }
  }
}
console.log(answer);
