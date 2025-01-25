const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let numArr = input.split(' ').map(Number);
let dp = [numArr[0]];
let max = 0;
for (let i = 1; i < +N; i++) {
  dp[i] = numArr[i];

  for (let j = 0; j < i; j++) {
    if (numArr[j] > numArr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + numArr[i]);
    }
  }
  max = Math.max(max, dp[i]);
}
console.log(max);

/*

1 100 2 50 60 8 7 3 6 5


1 100 102 150 160 168 175 178 181 186

다음 나오는 원소가 누적합보다 큰 경우에는 새롭게


40 10 5 35

어떻게 해야지 간결하고 깔끔하게 


100 30 20 70 
100 130 150 

*/
