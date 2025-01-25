const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const answer = [];

for (let i = 0; i < input.length; i++) {
  let str = input[i];
  let temp = [0, 0, 0, 0];
  if (str === '') continue;
  for (const char of str) {
    if (char >= 'a' && char <= 'z') {
      temp[0]++;
    } else if (char >= 'A' && char <= 'Z') {
      temp[1]++;
    } else if (char >= '0' && char <= '9') {
      temp[2]++;
    } else {
      temp[3]++;
    }
  }
  answer.push(temp.join(' '));
}

console.log(answer.join('\n'));

// charCode의 순서 'a' 'A' '1' ' ' 순서다.
