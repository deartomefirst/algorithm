const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);

let answer = [arr[0]];
for (let i = 1; i < n; i++) {
  if (arr[i] > answer.at(-1)) {
    answer.push(arr[i]);
  } else if (arr[i] < answer.at(-1)) {
    let start = 0;
    let end = answer.length - 1;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[i] > answer[mid]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    answer[end] = arr[i];
  }
  //arr[i] === answer.at(-1) 이면 지금까지의 가장 긴 수열의 길이는 유지된다.
}

console.log(answer.length);
