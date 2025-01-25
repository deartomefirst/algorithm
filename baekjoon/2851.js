const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

let sum = 0;
let lastIndex;
for (let i = 0; i < input.length; i++) {
  sum += input[i];
  if (sum >= 100) {
    lastIndex = i;
    break;
  }
}
if (sum === 100) {
  console.log(100);
} else {
  if (lastIndex === undefined) {
    console.log(sum);
  } else {
    let temp = sum - input[lastIndex];
    if (Math.abs(100 - temp) < Math.abs(100 - sum)) {
      console.log(temp);
    } else {
      console.log(sum);
    }
  }
}
