const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [LC, input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [L, C] = LC.split(' ').map(Number);
const sortedArr = input.split(' ').sort();

const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
for (let i = 0; i < sortedArr.length; i++) {
  if (vowelSet.has(sortedArr[i])) {
    vowel.push(sortedArr[i]);
  } else {
    consonant.push(sortedArr[i]);
  }
}

const answer = [];

function makePassword(arr, start) {
  if (arr.length === L) {
    let vowelNum = 0;
    let consonant = 0;
    for (let i = 0; i < L; i++) {
      if (vowelSet.has(arr[i])) {
        vowelNum++;
      } else {
        consonant++;
      }
    }
    if (vowelNum >= 1 && consonant >= 2) {
      answer.push(arr.join(''));
    }
    return;
  }

  for (let i = start; i < C; i++) {
    arr.push(sortedArr[i]);
    makePassword(arr, i + 1);
    arr.pop();
  }
}

makePassword([], 0);
console.log(answer.join('\n'));
