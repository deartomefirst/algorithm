const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const arr = input
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let finish = +N - 1;
let min = Math.abs(arr[start] + arr[finish]);
let minValue = [arr[start], arr[finish]];
while (start < finish) {
  let newValue = arr[start] + arr[finish];
  if (Math.abs(newValue) < min) {
    min = Math.abs(newValue);
    minValue = [arr[start], arr[finish]];
  }
  if (newValue > 0) {
    finish -= 1;
  } else if (newValue < 0) {
    start += 1;
  } else {
    break;
  }
}

console.log(minValue.join(' '));
