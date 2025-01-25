const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const arr = input.split(' ').map(Number);
let result = [arr[0], arr[+n - 1]];

if (arr[0] >= 0) {
  console.log(arr[0], arr[1]);
} else if (arr[+n - 1] <= 0) {
  console.log(arr[+n - 2], arr[+n - 1]);
} else {
  let minSum = 2000000001;

  let start = 0;
  let finish = +n - 1;

  while (start < finish) {
    let sum = arr[start] + arr[finish];
    if (Math.abs(sum) < minSum) {
      result = [start, finish];
      minSum = Math.abs(sum);
    }
    if (sum > 0) {
      finish--;
    } else if (sum < 0) {
      start++;
    } else {
      break;
    }
  }
  console.log(arr[result[0]], arr[result[1]]);
}
