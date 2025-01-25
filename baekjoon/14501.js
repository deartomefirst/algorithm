const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const arr = input.map((v) => v.split(' ').map(Number));
// let max = 0;
// function maxProfit(idx, sum) {
//   if (idx === +N) {
//     if (max < sum) {
//       max = sum;
//     }
//   }
//   if (idx > +N - 1) {
//     return;
//   }
//   let [day, profit] = arr[idx];
//   maxProfit(idx + 1, sum);
//   maxProfit(idx + day, sum + profit);
// }

// maxProfit(0, 0);
// console.log(max);

// dp로도 해결 가능하다.
/*


*/

let dp = Array(+N).fill(0);
let answer = [];
for (let i = 0; i < +N; i++) {
  let [day, profit] = arr[i];

  if (i + day < +N) {
    dp[i] = dp[i - 1];
  } else if (i + day === +N) {
    answer.push(dp[i] + profit);
  } else {
    dp[i] = dp[]
  }
  
}
