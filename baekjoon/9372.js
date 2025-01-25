const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let index = 0;
const T = +input[index++];

for (let i = 0; i < T; i++) {
  let [N, M] = input[index++].split(' ').map(Number);

  index += M;

  // 그래프 가지고 모든 국가를 여행하는 경우의 수를 구해야 한다.
  console.log(N - 1);
}
