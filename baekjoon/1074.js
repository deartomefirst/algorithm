/*

N = 3 일때
8 * 8 크기의 행렬 2^3 * 2^3

64개의 칸 중에서

2^2 * 2^2 크기로

3행 1열

4 + 4 + 


*/

const [N, row, col] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split(' ')
  .map((v) => +v);

let result = 0;
function findOrderMatrix(n, row, col) {
  if (n === 1) {
    if (row === 1 && col === 1) return;
    else if (row === 1 && col === 2) {
      result += 1;
      return;
    } else if (row === 2 && col === 1) {
      result += 2;
      return;
    } else if (row === 2 && col === 2) {
      result += 3;
      return;
    }
  }
  const halfLength = 2 ** n / 2;

  if (row <= halfLength && col <= halfLength) {
    findOrderMatrix(n - 1, row, col);
  }
  if (row <= halfLength && col > halfLength) {
    result += halfLength * halfLength;
    findOrderMatrix(n - 1, row, col - halfLength);
  }
  if (row > halfLength && col <= halfLength) {
    result += halfLength * halfLength * 2;
    findOrderMatrix(n - 1, row - halfLength, col);
  }
  if (row > halfLength && col > halfLength) {
    result += halfLength * halfLength * 3;
    findOrderMatrix(n - 1, row - halfLength, col - halfLength);
  }
}
findOrderMatrix(N, row + 1, col + 1);
console.log(result);
