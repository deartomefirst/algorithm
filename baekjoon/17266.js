const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const bridgeLen = +input[0];
const M = +input[1];
const location = input[2].split(' ').map(Number);

let max = Math.max(location[0], bridgeLen - location[M - 1]);

for (let i = 1; i < M; i++) {
  let between = Math.ceil((location[i] - location[i - 1]) / 2);
  if (max < between) {
    max = between;
  }
}
console.log(max);

/*

location

다르게 생각하면 가로등 사이의 최대거리 /2 올림

*/
