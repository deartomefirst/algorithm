const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let s = 0;
let f = 0;
const counter = {};
counter[arr[s]] = 1;
let max = 1;
let now = 1;
while (s <= f) {
  f++;
  if (f === arr.length) break;
  counter[arr[f]] = (counter[arr[f]] || 0) + 1;
  if (counter[arr[f]] > k) {
    while (counter[arr[s]] !== counter[arr[f]]) {
      counter[arr[s]]--;
      s++;
      now--;
    }
    counter[arr[s]]--;
    s++;
  } else {
    now++;
    max = Math.max(now, max);
  }
}
console.log(max);
/*

0 0
0 1
0 2
0 3
0 4
0 5
0 6



*/
