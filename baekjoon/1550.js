const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const str = require('fs').readFileSync(filePath, 'utf-8').trim().split('');

let dic = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
let sum = 0;
for (let i = str.length - 1; i >= 0; i--) {
  if (str[i].charCodeAt() >= 65) {
    sum += Math.pow(dic[str[i]], str.length - i);
  } else {
    sum += Number(str[i]);
  }
}
console.log(sum);
