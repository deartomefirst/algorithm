const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const str = require('fs').readFileSync(filePath, 'utf-8').trim();

let answer = [];
for (let i = 0; i < str.length; i += 10) {
  answer.push(str.slice(i, i + 10));
}
console.log(answer.join('\n'));
