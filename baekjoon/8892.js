const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

// 앞뒤가 같은지 판멸하는 함수
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}
let index = 0;
const T = +input[index++];
for (let t = 0; t < T; t++) {
  const k = +input[index++];
  const words = [];

  for (let i = 0; i < k; i++) {
    words.push(input[index++]);
  }
  // 여기에 해답을 적용하면 된다.
  let answer = 0;
  for (let i = 0; i < k; i++) {
    let hasPalin = false;

    for (let j = 0; j < k; j++) {
      if (i === j) continue;
      let newWord = words[i] + words[j];
      if (isPalindrome(newWord)) {
        answer = newWord;
        hasPalin = true;
        break;
      }
    }

    // for (let j = i + 1; j < k; j++) {
    //   let newWord = words[i] + words[j];
    //   let newWord2 = words[j] + words[i];
    //   if (isPalindrome(newWord)) {
    //     answer = newWord;
    //     hasPalin = true;
    //     break;
    //   }
    //   if (isPalindrome(newWord2)) {
    //     answer = newWord2;
    //     hasPalin = true;
    //     break;
    //   }
    // }
    if (hasPalin) break;
  }

  console.log(answer);
}
