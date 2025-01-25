const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const num = Number(require('fs').readFileSync(filePath, 'utf-8').trim());

const answer = [];
for (let i = 0; i < num; i++) {
  let str = [];

  for (let j = num-1-i; j>0; j--) {
    str.push(' ');
  }
  for (let j = 0; j < 2 * i+1; j++) {
    if (j % 2 === 0) str.push('*');
    else str.push(' ');
  }
  answer.push(str.join(''));
}
console.log(answer.join('\n'));