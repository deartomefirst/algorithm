const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [str, word] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let count = 0;
for (let i = 0; i < str.length; i++) {
  
  let isSame = true;
  for (let j = 0; j < word.length; j++) {
    if (str[i + j] !== word[j]) {
      isSame = false;
      i += j+1;
      break;
    }
  }
  if (isSame) {
    count++;
    i += word.length-1;
  }
}
console.log(count);