const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const str = require('fs').readFileSync(filePath, 'utf-8').trim();

let answer = 0;

let stack = [];
let sum = 0;

if (stack.length !== 0) {
  console.log(0);
} else {
  console.log(answer);
}

/*

계산하는 순서를 만드는 게 신기하다..


(()[[]])


((



  

*/
