const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

// 완전이진검색
/*
1
2
4
8
...


입력받은 숫자를 사용해서 직접 완전이진트리를 만들까?

층수를 찾자.
1
2
4
8
16

15는 몇층일까요?


*/
for (let t = 0; t < T; t++) {
  let num = arr[t];
  let floor = 1;
  let quo = 2;
  while (true) {
    if (num < quo) {
      break;
    } else {
      quo *= 2;
      floor += 1;
    }
  }
  console.log(quo, floor, quo - num);
  // 3층 오른쪽에서 2번째
  console.log(Math.pow(2, floor) - (quo - num));
}
