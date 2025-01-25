const [testNum, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

let result = '';

for (let i = 0; i < testNum; i++) {
  const cmd = arr[3 * i];
  const numArrLength = arr[3 * i + 1];
  const numArr = JSON.parse(arr[3 * i + 2]);
  let isReverese = false;
  let isCal = true;
  let start = 0;
  let finish = numArrLength - 1;
  for (let j = 0; j < cmd.length; j++) {
    if (cmd[j] === 'D') {
      if (start > finish) {
        result += 'error\n';
        isCal = false;
        break;
      }
      if (isReverese) {
        finish -= 1;
      } else {
        start += 1;
      }
    } else {
      isReverese = !isReverese;
    }
  }
  if (isCal) {
    if (isReverese) {
      result += `[${numArr.splice(start, finish - start + 1).reverse()}]\n`;
    } else {
      result += `[${numArr.splice(start, finish - start + 1)}]\n`;
    }
  }
}
console.log(result.trim());


/*

deque 구조를 구현했으면 어땠을까?


*/
