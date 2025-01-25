const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = +require('fs').readFileSync(filePath, 'utf-8').trim();

let answer = [];

for (let i = 1; i <= N; i++) {
  let str = '';
  str += ' '.repeat(N - i);
  str += '*'.repeat(2 * i - 1);

  answer.push(str);
}
for (let i = 1; i < N; i++) {
  let str = '';
  str += ' '.repeat(i);
  str += '*'.repeat(2 * N - 2 * i - 1);

  answer.push(str);
}

console.log(answer.join('\n'));
