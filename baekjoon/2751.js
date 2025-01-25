const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);
arr.sort((a, b) => a - b);
let result = [arr[0]];
for (let i = 1; i <= num; i++) {
  if (arr[i] !== result[i - 1]) {
    result.push(arr[i]);
  }
}
console.log(result.join('\n'));

/*

문제 잘 읽고...
내장 함수를 쓸 때(filter)의
잘못된 점을 알고 쓰자~~~


*/
