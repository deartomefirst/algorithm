const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nk, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, k] = nk.split(' ').map(Number);
const coins = input.map(Number);

const dp = Array(k + 1).fill(0);
dp[0] = 1;

for (let i = 0; i < n; i++) {
  for (let j = coins[i]; j <= k; j++) {
    dp[j] += dp[j - coins[i]];
  }
}
console.log(dp[k]);

/*
어떻게 할까...

1일때

2일때

3일때


[ ]


dp는 결과들을 가지고 어떻게 처리하냐...


*/
