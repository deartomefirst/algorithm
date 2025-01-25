const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = Number(input[0]);
const dataTypeArr = input[1].split(' ').map(Number);
const dataArr = input[2].split(' ').map(Number).filter((_, i) => dataTypeArr[i] === 0);
const insertNum = Number(input[3]);
const insertArr = input[4].split(' ').map(Number);

if (insertNum < dataArr.length) {
  console.log(dataArr.slice(-1 * insertNum).reverse().join(' '));
} else {
  console.log(dataArr.reverse().concat(insertArr.slice(0, insertNum - dataArr.length)).join(' '));
}




/*
시간초과 발생

1.어차피 stack은 연산을 할 필요가 없다 -> filter로 stack 타입인 원소를 제거

2. 결국 마지막 원소가 튕겨져 나온다

3. insertNum만큼 뒤에서부터 순회하면서 answer에 넣자

4. 잘라서 한번에 처리할 수 있겠다... -> 조건이 바뀔 때 리팩토링 하기가 어려워진다

*/