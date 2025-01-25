const fs = require('fs');
const [n, ...arr] = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

let dp = [
  [1, 0],
  [0, 1],
];
function fib(n) {
  if (dp[n]) return dp[n];
  dp[n] = [fib(n - 1)[0] + fib(n - 2)[0], fib(n - 1)[1] + fib(n - 2)[1]];
  return dp[n];
}
for (let i = 0; i < n; i++) {
  console.log(fib(+arr[i]).join(' '));
}

// let call0 = 0;
// let call1 = 0;
// let fibArr = [0, 1];
// function fib(n) {
//   if (n === 0) {
//     ++call0;
//     return 0;
//   } else if (n === 1) {
//     ++call1;
//     return 1;
//   }
//   if (fibArr[n]) return n;

//   return fib(n - 1) + fib(n - 2);
// }

// for (let i = 0; i < n; i++) {
//   call0 = 0;
//   call1 = 0;
//   fib(arr[i]);
//   console.log(`${call0} ${call1}`);
// 시간을 초과한다.
// }

/*



dp로 푼다면....
기록을 하면서 문제를 해결해야 여러개의 테스트 케이스를 빠르게 해결할 수 있을 것 같다.
*/
