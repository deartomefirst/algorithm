const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [num, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

function isPangram(str) {
  const pangramCheck = Array(26).fill(3);
  let upper = str.toUpperCase();
  for (let i = 0; i < upper.length; i++) {
    if (upper[i].charCodeAt() < 65 || upper[i].charCodeAt() > 90) continue;
    pangramCheck[upper[i].charCodeAt() - 65] -= 1;
  }
  let max = Math.max(...pangramCheck);
  if (max === 3) {
    return 'Not a pangram';
  } else if (max === 2) {
    return 'Pangram!';
  } else if (max === 1) {
    return 'Double pangram!!';
  } else if (max === 0) {
    return 'Triple pangram!!!';
  }
}

for (let i = 0; i < +num; i++) {
  console.log(`Case ${i + 1}: ${isPangram(input[i])}`);
}
