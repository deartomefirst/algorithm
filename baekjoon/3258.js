const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [N, Z, M] = input[0].split(' ').map(Number);
const obstacle = new Set(input[1].split(' ').map(Number));

// 도착할 수 있는 가장 작은 k를 찾는 프로그램을 작성하시오.

/*

1 2 3 4 5 6 7


1 4 7

*/

let now = 1;
let k = 1;
while (true) {
  now += k;
  if (now > N) {
    now %= N;
  }
  if (now === 1 || obstacle.has(now)) {
    k++;
    now = 1;
  }

  if (now === Z) break;
}

console.log(k);
