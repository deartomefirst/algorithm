/*

2개
1 2
1 3
2 3

3개
1 3
1 2
3 1

1 3
2 1
2 3
1 3


from to other의 개념을 사용하자.


n개를 세 번째 장대로 옮긴다고 생각하면
n-1개를 두 번째 장대로 옮긴다고 생각하면 된다.



*/
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = +require('fs').readFileSync(filePath, 'utf-8').trim();

// 귀납적 사고를 하자.
let result = [];
function moveDisk(n, start, finish) {
  if (n === 1) {
    result.push(`${start} ${finish}`);
    return;
  }

  moveDisk(n - 1, start, 6 - start - finish);
  result.push(`${start} ${finish}`);
  moveDisk(n - 1, 6 - start - finish, finish);
}
moveDisk(input, 1, 3);
console.log(result.length);
console.log(result.join('\n'));
