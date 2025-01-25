const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const str = input[0];
const t = Number(input[1]);


const sumArr = Array.from({ length: 26 }, () => Array(str.length + 1).fill(0));

for (let i = 0; i < str.length; i++) {
  const idx = str[i].charCodeAt() - 97;
  for (let j = 0; j < 26; j++) {
    sumArr[j][i + 1] = sumArr[j][i] + (idx === j ? 1 : 0);
  }
}
const answer = [];

for (let i = 2; i < 2 + t; i++) {
  let [alpha, s, f] = input[i].split(' ');
  s = +s;
  f = +f;
  const idx = alpha.charCodeAt() - 97;
  answer.push(sumArr[idx][f+1] - sumArr[idx][s]);
}
console.log(answer.join('\n'));


// 문자열의 길이만큼 배열을 만들어두고,
// alpha의 갯수만큼!!! => 최대 20만개가 등장해서
//

// 반대로 생각했네