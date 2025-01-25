const arr = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < arr.length; i++) {
  let result = arr[i]
    .trim()
    .split(' ')
    .map((v) => +v)
    .reduce((acc, val) => acc + val, 0);
  switch (result) {
    case 0:
      console.log('D');
      break;
    case 1:
      console.log('C');
      break;
    case 2:
      console.log('B');
      break;
    case 3:
      console.log('A');
      break;
    default:
      console.log('E');
      break;
  }
}

/*
string으로 받아오면 항상 trim을 해줘야함.
readFileSync 이후 toString을 할 때
과정을 자세히 살펴보자.


trim()을 split(' '); -> 없으면 에러뜸

reduce((acc,val) => acc + val, 0) -> 상관없었음

왜 틀리지...? 모와 윷을 오해했다.
*/
