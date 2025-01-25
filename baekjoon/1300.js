const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

let start = 1;
let finish = k;
let num = n * n + 1;

while (start <= finish) {
  let mid = Math.floor((start + finish) / 2);

  let lessCount = 0;
  for (let i = 1; i <= n; i++) {
    lessCount += Math.min(n, Math.floor(mid / i));
  }

  if (k <= lessCount) {
    num = Math.min(mid, num);
    finish = mid - 1;
  } else {
    start = mid + 1;
  }
}
console.log(num);

// 이분탐색 - 탐색 범위를 계속 절반으로 줄여간다. 시간복잡도 O(logN)
// 매개변수탐색 - 최적화 문제를 결정 문제로 변경해서 해결한다.
/*
최적화 : 최적 솔루션을 찾는 것
결정 : 답이 결정되어 있다고 보고 문제를 해결하는 것

이진탐색은 target과 일치하는 값을 발견하면 함수를 종료하지만
매개변수 탐색은 함수를 종료하지 않고 모든 배열을 살펴본다.
-> 매개변수 탐색은 어떤 조건을 만족하는 위치 중 가장 크거나 작은 값을 찾을 때 사용된다.
1. 어떤 시점까지 조건을 만족하지만 그 후로 만족하지 않는 경우, 조건을 만족하는 최댓값 찾기
2. 어떤 시점까지 조건을 만족하지 않지만 그 후로는 조건을 만족하는 경우, 조건을 만족하는 최소값 찾기


*/
