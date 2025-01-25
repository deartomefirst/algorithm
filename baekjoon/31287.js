const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const str = input[1];

let isOriginComeBack = false;
let x = 0;
let y = 0;
let frequency = K >= 1000 ? 1000 : K;

for (let i = 0; i <= N * frequency; i++) {
  let direction = str[i % N];
  switch (direction) {
    case 'U':
      x++;
      break;
    case 'D':
      x--;
      break;
    case 'L':
      y--;
      break;
    default:
      y++;
  }

  if (x === 0 && y === 0) {
    isOriginComeBack = true;
    break;
  }
}
console.log(isOriginComeBack ? 'YES' : 'NO');

/*

36퍼에서 대기 중임... 왜 그럴까...? -> 시간 초과 뜸
10의 9제곱은 너무 많이 반복해...

한바퀴 돌면서 00을 지나는 지 확인하고


DRRRUULLLLD d:2 r:3 u:2 l:4
DRRRUULLLLD
순서에 따라서 안되는 경우도 있다.
DRLRLRLLU

브루트포스를 하면 안된다.


*/
