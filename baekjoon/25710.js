const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, arr] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
n = +n;
arr = arr.split(' ').map(Number);
const nums = new Set();
const dupNums = new Set();
for (let i = 0; i < n; i++) {
  if (nums.has(arr[i])) {
    dupNums.add(arr[i]);
  } else {
    nums.add(arr[i]);
  }
}

let max = 0;
const numsArr = [...nums].map(Number);
for (let i = 0; i < numsArr.length; i++) {
  for (let j = i + 1; j < numsArr.length; j++) {
    let temp = numsArr[i] * numsArr[j];
    let sum = 0;
    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (max < sum) {
      max = sum;
    }
  }
}

const dupArr = [...dupNums].map(Number);
for (let i = 0; i < dupArr.length; i++) {
  let temp = dupArr[i] * dupArr[i];
  let sum = 0;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  if (max < sum) {
    max = sum;
  }
}

console.log(max);

/*

어떻게 하면 최댓값을 구할 수 있을까?



*/
