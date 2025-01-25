const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);

// 대표 자연수를 구한다... 감소할 때까지 하다가 증가하기 시작하면 stop
let min = 10001;
let max = 0;

for (let i = 0; i < N; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
  if (max < arr[i]) {
    max = arr[i];
  }
}
let minDiffSum = 200000001;
let num = 0;
for (let i = min; i <= max; i++) {
  let temp = diffSum(arr, i);
  if (temp < minDiffSum) {
    minDiffSum = temp;
    num = i;
    continue;
  }
  break;
}
console.log(num);

function diffSum(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.abs(arr[i] - num);
  }
  return sum;
}

/*
왜 sort하고 중간값이 되는걸까?


*/
