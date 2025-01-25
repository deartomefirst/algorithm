const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [num, ...ropes] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);
const desc = ropes.sort((a, b) => b - a);
let max = desc[0];
for (let i = 1; i < num; i++) {
  if ((i + 1) * desc[i] > max) {
    max = (i + 1) * desc[i];
  }
}
console.log(desc);
console.log(max);

// 어떻게 하면 최대 무게를 들 수 있을까?
/*

어떻게 하면 가능할 지 확인해보자...

내림차순으로 정렬하고
1*a[0]
2*a[1]
3*a[2] 순으로 하다가 
꺾이는 부분이 생기면 멈추고 출력

*/
