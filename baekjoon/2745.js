const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, B] = require('fs').readFileSync(filePath, 'utf-8').trim().split(' ');

let answer = 0;

// A 65 a 97
for (let i = 0; i < n.length; i++) {
  if (isNaN(n[i])) {
    answer += Math.pow(+B, n.length - i - 1) * (n[i].charCodeAt(0) - 55);
  } else {
    answer += Math.pow(+B, n.length - i - 1) * +n[i];
  }
}
console.log(answer);
