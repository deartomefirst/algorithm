const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('')
  .map(Number);

let answer = '';

if (input[0] === 0) {
  console.log(0);
} else {
  while (input.length) {
    let num = input.pop();
    answer = num.toString(2).padStart(3, '0') + answer;
  }

  console.log(answer.replace(/^0+/, ''));
}

/*
3개씩 쪼갤 수 있도록 

*/
