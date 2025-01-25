const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let answer = [];

for (let i = 0; i < +n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  console.log(x, y);
}

/*

(1 - (2a+b))^2

2 - (3a+b)


a,b는 100이하의 양의 정수

2-a-b의 값이 0에 가까운 값을 만드는 a,b를 찾아라.

3-2a-b

*/
