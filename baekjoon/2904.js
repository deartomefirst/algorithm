const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// 전부 곱한 값을 소인수 분해 n등분 할 수 있을만큼의 소인수가 있는지 확인하고
// 없으면 1을 출력하고 아니라면 n등분을 하고 각각의 값과 비교하자.
// 이때 얻어야 하는 값만 계산하면 된다.

let counter = {};

function findFactor(n) {
  let num = n;
  let mod = 2;
  let modCounter = {};
  while (num !== 1) {
    if (num % mod === 0) {
      counter[mod] = counter[mod] || 0;
      counter[mod] += 1;
      num /= mod;
      modCounter[mod] = modCounter[mod] || 0;
      modCounter[mod] += 1;
    } else {
      if (mod % 2 === 1) {
        mod += 2;
      } else {
        mod += 1;
      }
    }
  }
  return modCounter;
}

const counterArr = arr.map((v) => findFactor(v));

let lcd = {};
let lcdNum = 1;
for (let i in counter) {
  if (Math.floor(counter[i] / n)) {
    lcd[i] = lcd[i] || 0;
    lcd[i] += Math.floor(counter[i] / n);
    lcdNum *= Math.pow(i, Math.floor(counter[i] / n));
  }
}

let calNum = 0;
for (let i in lcd) {
  for (let j = 0; j < n; j++) {
    if (counterArr[j][i] === undefined) {
      calNum += lcd[i];
    } else if (counterArr[j][i] < lcd[i]) {
      calNum += lcd[i] - counterArr[j][i];
    }
  }
}
console.log(lcdNum, calNum);
