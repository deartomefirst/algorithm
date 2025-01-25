const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, str] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const N = +n;
const arr = str.split(' ').map(Number);
let max = 0;

const answer = [];
let temp = [];
const isUsed = Array(N).fill(false);
function permutation(k) {
  if (k === N) {ㅔ
    let sum = absSum([...temp]);
    if (max < sum) {
      max = sum;
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    // 사용되지 않은 index일 때
    if (!isUsed[i]) {
      isUsed[i] = true;
      temp[k] = arr[i];
      permutation(k + 1);
      isUsed[i] = false;
    }
  }
}

permutation(0);

function absSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
}

console.log(max);
