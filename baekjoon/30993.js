const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, A, B, C] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

/*
무슨 말일까?

7대를 댈 수 있다.
2 2 3 을 가지고 만들 수 있는 경우의 수를 구해라



  */

let factorialArr = [1, 1];
for (let i = 2; i <= N; i++) {
  factorialArr.push(factorialArr[i - 1] * i);
}

console.log(
  factorialArr[N] / (factorialArr[A] * factorialArr[B] * factorialArr[C])
);
