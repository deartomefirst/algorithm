const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number).reverse();
const stack = [];
let targetNum = 1;
while (true) {
  if (arr.length === 0 && stack.length === 0) {
    console.log('Nice');
    break;
  }
  if (arr.length === 0 && stack.at(-1) !== targetNum) {
    console.log('Sad');
    break;
  }

  if (arr.at(-1) === targetNum) {
    arr.pop();
    targetNum++;
  } else {
    if (stack.at(-1) === targetNum) {
      stack.pop();
      targetNum++;
    } else {
      stack.push(arr.pop());
    }
  }
  console.log(arr, stack);
}

/*

52341


순서를 어떻게 해야할지
직접 다 확인하는게 맞는건지 아니면 그냥 수의 순서만 보고도 알 수 있는건지




*/
