const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

let answer = [];

for (let i = 1; i <= input[0]; i++) {

}


/*

55 34 21 13 8 5 3 2 1

*/