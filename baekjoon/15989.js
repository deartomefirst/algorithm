const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

let answer = [];
let max = Math.max(...input);
const dp = Array(max + 1).fill(1);

for (let j = 2; j <= 3; j++) {
  for (let i = j; i <= max; i++) {
    dp[i] += dp[i - j];
  }
}
for (let i = 0; i < n; i++) {
  answer.push(dp[input[i]]);
}
console.log(answer.join('\n'));
/*


1 
11 2 
111 [1]+2 3
1111 [11 2]+2 [1]+3
11111 [111,12]+2 
111111 [11112, 1122, 222]+2
1111111 [11111, 1112, 122]+2

*/
