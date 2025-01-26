const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n').map(v => v.split(' ').map(Number));
// 중앙값의 값을 알기위해 졍렬
input.sort((a, b) => a[0] - b[0]);
// 중앙값을 찾기 위해 갯수를 더해주고, 중앙값을 결정
// 짝수 개의 경우 n/2가 작은 값이 된다.
const halfNum = Math.ceil(input.reduce((prev, cur) => prev + cur[1], 0)/2);

// sum에 값의 갯수를 더해주면서 halfNum의 갯수에 도달하거나 넘어가는 수의 값을 출력하고 종료
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += input[i][1];
  if (sum >=halfNum) {
    console.log(input[i][0]);
    break;
  }
}

