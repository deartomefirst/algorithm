const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

for (let i = 1; i <= +input[0]; i++) {
  if (input[i].length > 10) continue;
  let lowerNum = 0;
  let upperNum = 0;
  let isChar = false;
  for (let char of input[i]) {
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      lowerNum++;
      isChar = true;
    }
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      upperNum++;
      isChar = true;
    }
    if (char === '-') isChar = true;
  }
  if (lowerNum < upperNum) continue;
  if (!isChar) continue;
  console.log(input[i]);
  break;
}
