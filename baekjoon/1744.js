const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

let sorted = input.sort((a, b) => b - a);
console.log(sorted);
if (n === 1) console.log(input[0]);
else {
  let maxSum = sorted[0];
  let sumArr = []
  for (let i = 1; i < n - 1; i++) {

  }
}

/*
for문을 돌면서 


- - -> 무조건 묶자
- 0 

-3 -2 -1 0 4

*/
