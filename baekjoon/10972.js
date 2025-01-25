const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);

let swapA = -1;

for (let i = N - 1; i > 0; i--) {
  if (arr[i - 1] < arr[i]) {
    swapA = i - 1;
    break;
  }
}
if (swapA === -1) {
  console.log(-1);
} else {
  let min = arr[swapA + 1];
  let swapB = swapA + 1;

  if (swapB < N) {
    for (let i = swapA + 2; i < N; i++) {
      if (arr[i] > arr[swapA] && arr[i] < min) {
        min = arr[i];
        swapB = i;
      }
    }
  }
  [arr[swapA], arr[swapB]] = [arr[swapB], arr[swapA]];
  const answer = [
    ...arr.slice(0, swapA + 1),
    ...arr.slice(swapA + 1).sort((a, b) => a - b),
  ];
  console.log(answer.join(' '));
}

/*

5 4 3 2 1 같이 바꿀게 없는 경우 -1 출력

1 2 3 4
1 2 4 3

1 3 4 2

1 4 2 3


*/
