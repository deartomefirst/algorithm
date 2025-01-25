const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const str = require('fs').readFileSync(filePath, 'utf-8').trim();
// 사전순?
// 몇개 있는지 확인하고
// 홀수개가 여러개면 i'msorry
// 앞에부터 00을 만들어가면서 넘어가자


const counter = Array(26).fill(0);

for (let char of str) {
  counter[char.charCodeAt() - 65]++;
}
let num = str.length;
let isOne = 0;
let index = 0;
const answer = Array(str.length).fill(0);

for (let i = 0; i < 26; i++) {
  let letter = String.fromCharCode(i + 65);
  if (counter[i] !== 0) {
    num -= counter[i];
    if (counter[i] % 2 === 1) {
      answer[Math.floor(str.length / 2)] = letter;
      isOne++;
      counter[i]--;
      if (isOne >= 2) break;
    }
    if (counter[i] > 0) {
      for (let j = index; j < index + counter[i] / 2; j++) {
        answer[j] = letter;
        answer[str.length - j - 1] = letter;
      }
      index+=counter[i]/2;
    } 
  }
  if (num === 0) break;
}
console.log(isOne >= 2  ? `I'm Sorry Hansoo` : answer.join(''));
// 영어 

