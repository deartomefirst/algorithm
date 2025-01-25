const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];
const numArr = input[1].split(' ').map(Number);

const dp = [-1000000000, ...numArr, 1000000000];

let count = 0;
let smallerIndex = 0;

for (let i = 1; i <= n; i++) {
  if (dp[i] < dp[i - 1]) {
    count++;
    smallerIndex = i;
  }
  if (count === 2) break;
}

let answer = 0;
if (count === 0) {
  answer = n;
} else if (count === 2) {
  answer = 0;
} else {
  if (dp[smallerIndex - 2] <= dp[i]) answer++;
  if (dp[smallerIndex - 1] <= dp[smallerIndex + 1]) answer++;
}

console.log(answer);

/*

1243

1342


무난하게 클 때는
dp[i] = dp[i-1] + 1

작을 때
- 직전보다만 작을 때,
- 두번째 전 보다 작을 때

작은 게 2번 발생



*/
