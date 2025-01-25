const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const str = require('fs').readFileSync(filePath, 'utf-8').trim();
let counter = { 0: 0, 1: 0 };
for (let i = 0; i < str.length; i++) {
  counter[str[i]]++;
}
let answer = [];
let n0 = counter[0] / 2;
let n1 = counter[1] / 2;

/*
1이고 남아있는 숫자가 0이 아닐 때

1이고 남아있는 숫자가 0일 때

0이고 남아있는 

*/

for (let i = 0; i < str.length; i++) {
  if (str[i] === '1' && n1 !== 0) {
    n1--;
    continue;
  } else if (str[i] === '1' && n1 === 0) {
    answer.push(1);
  }
  if (str[i] === '0' && n0 !== 0) {
    n0--;
    answer.push(0);
  } else if (str[i] === '0' && n0 === 0) {
    continue;
  }
}
console.log(answer.join(''));
