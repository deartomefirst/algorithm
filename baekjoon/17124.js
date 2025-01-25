const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const T = Number(input[0]);
const answer = [];
for (let i = 0; i < T; i++) {
  const [n, m] = input[3 * i + 1].split(' ').map(Number);
  const firstArr = input[3 * i + 2].split(' ').map(Number);
  const secondArr = input[3 * i + 3]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const thirdArr = [];

  for (let i = 0; i < n; i++) {
    let v = firstArr[i];
    let s = 0;
    let f = m - 1;

    if (secondArr[s] === v) {
      thirdArr.push(v);
      continue;
    } else if (secondArr[f] === v) {
      thirdArr.push(v);
      continue;
    }

    let isSame = false;
    while (s + 1 < f) {
      let mid = Math.floor((s + f) / 2);
      if (secondArr[mid] === v) {
        thirdArr.push(v);
        isSame = true;
        break;
      } else if (secondArr[mid] < v) {
        s = mid;
      } else {
        f = mid;
      }
    }

    if (!isSame) {
      if (Math.abs(v - secondArr[s]) > Math.abs(v - secondArr[f])) {
        thirdArr.push(secondArr[f]);
      } else {
        thirdArr.push(secondArr[s]);
      }
    }
  }

  answer.push(thirdArr.reduce((pre, cur) => pre + cur, 0));
}
console.log(answer.join('\n'));
/*

이분탐색으로 찾아야할 듯...?

*/
