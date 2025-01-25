const input = +require('fs').readFileSync('input.txt', 'utf-8').trim();

const dp = [0, 0];
const pre = [0, 0];

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + 1;
  pre[i] = i - 1;
  if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
    dp[i] = dp[i / 2] + 1;
    pre[i] = i / 2;
  }
  if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
    dp[i] = dp[i / 3] + 1;
    pre[i] = i / 3;
  }
}
console.log(dp, pre);
let current = input;
let result = '';
while (true) {
  result += `${current} `;
  if (current === 1) break;
  current = pre[current];
}
console.log(dp[input] + '\n' + result);

/*

minOper = [0,0,1,1,2,]


28
27
9
3
1

28
14
7
6
2
1

Math.min()


*/
