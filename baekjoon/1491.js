const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [N, M] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

let arr = Array.from({ length: N }, () => Array(M).fill(0));
let index = [0, 0];
let dirIdx = 0;
let count = 1;
arr[index[0]][index[1]] = 1;
while (count < N * M) {
  newIndex = [index[0] + dir[dirIdx][0], index[1] + dir[dirIdx][1]];
  if (
    newIndex[0] < 0 ||
    newIndex[0] >= N ||
    newIndex[1] < 0 ||
    newIndex[1] >= M ||
    arr[newIndex[0]][newIndex[1]] === 1
  ) {
    dirIdx = (dirIdx + 1) % 4;
  }

  index = [index[0] + dir[dirIdx][0], index[1] + dir[dirIdx][1]];
  arr[index[0]][index[1]] = 1;
  count += 1;
}
console.log(index.join(' '));


// direction 방향대로 움직이다가, 범위를 벗어나거나 이동해야 하는 방향에 이미 0이 찍혀있는 경우에는 direction을
// 바꾸고 이동을 시도한다. 만약 한 자리에서 direction 변경을 2번 이상 시도하면 반복문을 끝낸다.
// 움직인 횟수를 카운트해서 크기와 같아지는 경우를 계산해도 된다.
