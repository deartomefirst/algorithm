const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const numArr = [-1000000000, ...arr.split(' ').map(Number)];

let descCount = 0;
let lastIdx;
let answer = 0;
for (let i = 1; i <= +n; i++) {
  if (numArr[i] < numArr[i - 1]) {
    descCount++;
    if (descCount === 2) break;
    lastIdx = i - 1;
  }
}

if (descCount > 1) {
  console.log(0);
} else if (descCount === 0) {
  console.log(n);
} else {
  if (numArr[lastIdx] <= numArr[lastIdx + 2]) answer++;
  if (numArr[lastIdx - 1] <= numArr[lastIdx + 1]) answer++;
  console.log(answer);
}

/*

1 1 -> 2
1 2 -> 2
3 1 -> 2

1 3 2 -> 0 2 

1 2 4 3 5 


-> 0 2 3 1
1 3 4 2 3




*/
