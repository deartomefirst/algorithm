const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function bubbleSort(arr) {
  let count = 0;
  for (let i = n; i >= 1; i--) {
    let isSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
        if (++count === m) return [arr[j], arr[j + 1]];
      }
    }
    if (!isSwap) {
      return [-1];
    }
  }
}
console.log(bubbleSort(arr).join(' '));

// 버블소트

/*

두 원소를 비교하면서 


*/
