const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const N = Number(n);
let count = 0;
for (let i = 0; i < N; i++) {
  let str = arr[i];
  let now = str[0];
  for (let j = 1; j < str.length; j++) {
    if (str[j] !== now) {
      count++;
      now = str[j];
    }
  }
}

// 순열을 구하고 바뀌는 경우를 계산
const isUsed = Array(n).fill(0);
let permutationArr = [];
let min = 10;
function permutation(k) {
  if (k === N) {
    let last = arr[permutationArr[0]].at(-1);
    let change = 0;
    for (let i = 1; i < N; i++) {
      if (arr[permutationArr[i]][0] !== last) {
        change++;
      }
      last = arr[permutationArr[i]].at(-1);
    }
    min = Math.min(change, min);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!isUsed[i]) {
      permutationArr[k] = i;
      isUsed[i] = 1;
      permutation(k + 1);
      isUsed[i] = 0;
    }
  }
}

permutation(0);

function permutation2(k, last, count) {
  if (k === N) {
    if (min > count) min = count;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!isUsed[i]) {
      permutationArr[k] = i;
      isUsed[i] = 1;
      permutation2(k + 1);
      isUsed[i] = 0;
    }
  }
}

console.log(count + min);
