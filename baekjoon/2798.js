const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
const [num, sumLimit] = input[0]
  .trim()
  .split(' ')
  .map((v) => +v);
const arr = input[1]
  .trim()
  .split(' ')
  .map((v) => +v);

let sum = 0;
let nearSumToLimit = 0;
for (let i = 0; i < num - 2; i++) {
  for (let j = i + 1; j < num - 1; j++) {
    for (let k = j + 1; k < num; k++) {
      sum = arr[i] + arr[j] + arr[k];
      console.log(i, j, k);
      if (sum > nearSumToLimit && sum <= sumLimit) {
        console.log(sum, nearSumToLimit);
        nearSumToLimit = sum;
      }
    }
  }
}
console.log(nearSumToLimit);

/*

범위 설정
k의 경우는 j를 기준으로 해주자.

*/
