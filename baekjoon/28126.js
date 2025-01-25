const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = Number(input[0]);
const order = input[1];

let R = 0;
let U = 0;
let X = 0;

for (let move of order) {
  if (move === 'R') {
    R++;
  } else if (move === 'U') {
    U++;
  } else {
    X++;
  }
}
let answer = 0;
for (let i = 3; i < input.length; i++) {
  let [r, u, x] = [R, U, X];
  let [a, b] = input[i].split(' ').map((v) => Number(v) - 1);
  let min = Math.min(x, a, b);
  a -= min;
  b -= min;
  if (a <= r && b <= u) answer++;
}
console.log(answer);
// 처음에 (1,1) 위치해 있다.
/*

2 3

어떤 조합을 선택해서 원하는 결과를 만들 것인지...
X부터 사용하고
나머지로 갈 수 있는지 확인하기


*/
