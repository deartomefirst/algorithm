const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);
console.log(input.reduce((prev, cur) => prev + cur));
console.log(
  input.reduce((prev, cur) => {
    if (cur < 40) {
      return prev + 40;
    } else {
      return prev + cur;
    }
  }, 0) / input.length
);
