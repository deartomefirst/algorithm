/*

빈도수 체크하는 문제
6과 9를 처리하는 방법만 주의하자.

66 ->1 개
6 9 -> 1개
9 9 -> 1개
6 9 6 -> 2개

counter에 집어넣자..

max로 쉽게 비교할 수 있다.

arr 3, 9를 합쳐서
newArr를 만들어내거나



*/

const roomNum = require('fs').readFileSync('input.txt').toString().trim();
const counter = Array(10).fill(0);

for (let i = 0; i < roomNum.length; i++) {
  ++counter[+roomNum[i]];
}
counter[6] = Math.ceil((counter[6] + counter[9]) / 2);
counter[9] = 0;
console.log(Math.max(...counter));
