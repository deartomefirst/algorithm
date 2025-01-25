const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];
let arr = input[1].split(' ').map(Number);
const [b, c] = input[2].split(' ').map(Number);

let count = 0;

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] - b < 0 ? 0 : arr[i] - b;
  count++;
  if (arr[i] > 0) {
    count += Math.ceil(arr[i] / c);
  }
}
console.log(count);
