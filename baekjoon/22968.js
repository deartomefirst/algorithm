const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);
const T = Number(input[0]);

const answer = [];
const dp = [0, 1];
for (let i = 1; i <= T; i++) {
  let num = input[i];
  let h = 1;

  /*
  dp[h]와 num을 비교했을 때

  num이 더 작다면 dp[h]

  num이 더 크다면 dp[h+1]을 계산해주면서 계속 비교한다.



  */
  while (num > dp[h]) {
    if (dp[h + 1] !== undefined) {
      h++;
    } else {
      dp[h + 1] = dp[h] + dp[h - 1] + 1;
      h++;
    }
  }
  if (dp[h] > num) {
    answer.push(h - 1);
  } else {
    answer.push(h);
  }
}
console.log(answer.join('\n'));

/*
1 - 1
2 - 2
3 - 2
4 - 3
5 - 3
6 - 

1
1 1
1 1 1
1
*/
