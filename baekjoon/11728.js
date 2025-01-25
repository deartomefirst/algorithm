const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], arr1, arr2] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
let i = 0;
let j = 0;
let answer = [];
while (i !== n && j !== m) {
  if (arr1[i] <= arr2[j]) {
    answer.push(arr1[i]);
    i++;
  } else {
    answer.push(arr2[j]);
    j++;
  }
}
if (answer.length < n + m) {
  if (i < n) {
    for (let k = i; k < n; k++) {
      answer.push(arr1[k]);
    }
  } else {
    for (let k = j; k < m; k++) {
      answer.push(arr2[k]);
    }
  }
}
console.log(answer.join(' '));
