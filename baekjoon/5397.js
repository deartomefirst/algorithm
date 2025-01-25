/*

강산이는
알파벳 대/소문자
숫자
백스페이스
화살표

*/

const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
const num = +input[0];
for (let i = 1; i <= num; i++) {
  let main = [];
  let sub = [];
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === '<') {
      if (main.length !== 0) {
        sub.push(main.pop());
      }
    } else if (input[i][j] === '>') {
      if (sub.length !== 0) {
        main.push(sub.pop());
      }
    } else if (input[i][j] === '-') {
      if (main.length !== 0) {
        main.pop();
      }
    } else {
      main.push(input[i][j]);
    }
  }
  while (sub.length !== 0) {
    main.push(sub.pop());
  }
  console.log(main.join(''));
}
