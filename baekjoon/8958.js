const fs = require('fs');
const [num, ...arr] = fs.readFileSync('input.txt').toString().split('\n');
const result = [];
for (let i = 0; i < num; i++) {
  let score = 0;
  let currentSum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === 'O') {
      currentSum += ++score;
    } else {
      score = 0;
    }
  }
  result.push(currentSum);
}
console.log(result.join('\n'));
