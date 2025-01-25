/*
이중 for문을 돌릴 것인가
-> 시간초과
const numArr = arr.split(' ').map((v) => +v);
let count = 0;
for (let i = 0; i < num - 1; i++) {
  for (let j = i + 1; j < num; j++) {
    if (numArr[i] + numArr[j] === +value) {
      count += 1;
    }
  }
}


정렬을 하고나서... 
for문을 한번만 돌릴 것인가
-> 이진 검색

그러면... 문제를 보고 알 수 있어야 하는 거 아닌가?
-> 제한 시간 같은 거 보고 어느정도의 시간복잡도가 필요한 지 대충은 알 수 있어야 함



*/

let [num, arr, value] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const numArr = arr
  .trim()
  .split(' ')
  .map((v) => +v)
  .sort((a, b) => a - b);
let count = 0;
let start = 0;
value = +value;
let finish = num - 1;
while (start < finish) {
  if (numArr[start] + numArr[finish] === value) {
    count++;
    start++;
    finish--;
  } else if (numArr[start] + numArr[finish] > value) {
    finish--;
  } else {
    start++;
  }
}
console.log(count);
