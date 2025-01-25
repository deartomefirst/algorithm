const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [students, snackNum] = input[0].split(' ').map((v) => +v);
const snacks = input[1].split(' ').map((v) => +v);

// 학생들 수보다 더 조각이 많이 나오는 지 확인하는 함수
function countPiece(x) {
  if (x === 0) return true;
  let count = 0;
  for (let i = 0; i < snackNum; i++) {
    count += Math.floor(snacks[i] / x);
  }
  return count >= students;
}

let start = 0;
let end = Math.max(...snacks);

while (start < end) {
  let mid = Math.floor((start + end + 1) / 2);
  if (countPiece(mid)) {
    start = mid;
  } else {
    end = mid - 1;
  }
}
console.log(start);

// 기준이 되는 index를 결정해야함.
/*
4개를 나눌 때
가장 큰 값을 4로 나눌 때 2 이상의 몫이 생긴다면
최대 길이가 달라진다.




10

1 1 14 28

*/
