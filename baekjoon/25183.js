const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, str] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
let isWin = true;
for (let i = 0; i <= +N - 5; i++) {
  isWin = true;
  for (let j = i; j < i + 4; j++) {
    if (Math.abs(str[j].charCodeAt(0) - str[j + 1].charCodeAt(0)) !== 1) {
      isWin = false;
      break;
    }
  }
  if (isWin) {
    break;
  }
}
console.log(isWin ? 'YES' : 'NO');
