const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...arr] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = Number(n);


/*

0초의 시간이 소요된 상태,

3초 간격으로 나타나, 5초 동안 침입자를 탐지하고 사라진다.
각 구간을 통과하는데에는 1초의 시간이 소요된다.


*/