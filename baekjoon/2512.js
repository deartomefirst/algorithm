const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = +input[0];
const budgetArr = input[1].split(' ').map(Number);
const cost = +input[2];

let sum = 0;
let max = budgetArr[0];
for (let i = 0; i < N; i++) {
  sum += budgetArr[i];
  max = Math.max(max, budgetArr[i]);
}
if (sum <= cost) {
  console.log(max);
} else {
  let start = Math.floor(cost / N);
  let finish = max;

  while (start <= finish) {
    let mid = Math.floor((start + finish) / 2);
    sum = budgetArr.reduce((prev, cur) => {
      return prev + (cur > mid ? mid : cur);
    }, 0);
    if (sum <= cost) {
      start = mid + 1;
    } else {
      finish = mid - 1;
    }
  }
  console.log(finish);
}

/*

520 - 484 = 36

// 작은 부분을 제외한 나머지만 가지고 for문을 돌리면 훨씬 편리하다!!!!!!!
for문을 돌리는 횟수가 많이 줄어든다.


=> 이거 꼭 게시글로 남기기!

19 29

*/
