const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);
const ascArr = [...arr].sort((a, b) => a - b);
if (ascArr.every((v, i) => v === arr[i])) {
  console.log(-1);
} else {
  let i = N - 2;
  let j = N - 1;

  while (arr[i] < arr[i + 1]) i--;
  while (arr[i] < arr[j]) j--;

  [arr[i], arr[j]] = [arr[j], arr[i]];

  let rest = arr.slice(i + 1);
  rest.sort((a, b) => b - a);
  let answer = [...arr.slice(0, i + 1), ...rest];
  console.log(answer.join(' '));
}
