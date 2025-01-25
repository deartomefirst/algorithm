const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [t, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);
const answer = [];

// for (let i = 0; i < t; i++) {
//   let target = arr[i];
//   let count = 0;
//   for (let i = 1; i * i <= target; i++) {
//     count++;
//   }
//   answer.push(count);
// }
// console.log(answer.join('\n'));

let top = Math.max(...arr);
const dp = Array(top + 1).fill(1);
for (let i = 2; i * i <= top; i++) {
  for (let j = i * i; j < (i + 1) * (i + 1) && j <= top; j++) {
    dp[j] = i;
  }
}
for (let i = 0; i < t; i++) {
  answer.push(dp[arr[i]]);
}
console.log(answer.join('\n'));
