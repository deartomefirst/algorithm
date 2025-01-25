/*

어떻게 하면 제일 간단하게 구현할 수 있을까?

연산을 제일 조금하는 방법에 대해서 조사하기

*/
const arr = require('fs').readFileSync('input.txt', 'utf-8').trim().split('\n');

for (let i = 0; i < arr.length - 1; i++) {
  let stack = [];
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === '(' || arr[i][j] === '[') stack.push(arr[i][j]);
    if (arr[i][j] === ')' || arr[i][j] === ']') {
      if (stack.length === 0) {
        stack.push(arr[i][j]);
        break;
      }
      let lastItem = stack.pop();
      if (arr[i][j] === ')') {
        if (lastItem !== '(') {
          stack.push(arr[i][j]);
          break;
        }
      }
      if (arr[i][j] === ']') {
        if (lastItem !== '[') {
          stack.push(arr[i][j]);
          break;
        }
      }
    }
  }

  if (stack.length === 0) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

/*

stack의 길이가 0인가?




*/
