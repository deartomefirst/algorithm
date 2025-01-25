const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = Number(require('fs').readFileSync(filePath, 'utf-8').trim());

let answer = [];
for (let i = 0; i < 2 * N - 1; i++) {
  let str = '';
  if (i < N - 1) {
    str += ' '.repeat(i);
    str += '*'.repeat(2 * (N - i) - 1);
  } else {
    // 5부터
    str += ' '.repeat(2 * (N - 1) - i);
    str += '*'.repeat(2 * (i - (N - 1)) + 1);
  }
  answer.push(str);
}
console.log(answer.join('\n'));
/*

8



*/
