const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[h, w], arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let stack = [];
let water = 0;
for (let i = 0; i < arr.length; i++) {
  if (stack.length === 0) {
    stack.push(arr[i]);
  } else {
    if (stack[0] > arr[i]) {
      stack.push(arr[i]);
    } else {
      // 초반에 작은 것과 구분해야 한다.
      if (stack.length === 1) {
        stack.pop();
        stack.push(arr[i]);
      } else {
        let firstHeight = stack[0];
        while (stack.length !== 0) {
          let popHeight = stack.pop();
          water += firstHeight - popHeight;
        }
        stack.push(arr[i]);
      }
    }
  }
}
// arr가 끝났다면 맨끝부터 담을 수 있는 것을 담으면서 마무리
if (stack.length <= 2) {
  console.log(water);
} else {
  while (stack.length) {
    let lastHeight = stack.pop();
    if (stack.length === 0) break;
    while (true) {
      let inside = stack.pop();
      if (inside < lastHeight) {
        water += lastHeight - inside;
      } else {
        stack.push(inside);
        break;
      }
    }
  }
  console.log(water);
}
