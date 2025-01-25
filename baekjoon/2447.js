/*

전체 배열에서 가운데 요소들을 공백으로 바꾸는 방식으로 해보자

*/

let num = +require('fs').readFileSync('input.txt', 'utf-8').trim();

// *로 num * num 크기의 2차배열을 채우기
const arr = Array.from({ length: num }, () => Array(num).fill('*'));

function makeCenterBlank(n, x, y) {
  // 첫 원소가 ' '이면 return;
  if (arr[x][y] === ' ') return;
  if (n === 1) return;
  n = parseInt(n / 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // 가운데 요소들을 ' '으로 변환
      for (let k = n; k < 2 * n; k++) {
        for (let l = n; l < 2 * n; l++) {
          arr[x + k][y + l] = ' ';
        }
      }

      console.log(n, x + i * n, y + j * n);
      makeCenterBlank(n, x + i * n, y + j * n);
    }
  }
}
makeCenterBlank(num, 0, 0);

for (let i = 0; i < num; i++) {
  console.log(arr[i].join(''));
}

/*

실수를 했을 경우에 문제점을 찾기가 힘들다...
순회하는 것을 먼저 확실히 구현하고 -> 세부적인 기능을 추가하는 순서로 구현하자.

*/
