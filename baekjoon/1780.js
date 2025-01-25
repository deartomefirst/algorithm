let [N, ...matrix] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

/*

어떻게 해야할까...?

순회하다가 원소가 하나로만 되어있지않다면

9등분을 한다.

n

0 n/3*1 n/3*2 n
0 <=  < n/3*1 


*/
matrix = matrix.map((v) =>
  v
    .trim()
    .split(' ')
    .map((v) => +v)
);

// -1 0 1로 되어있는 종이의 개수를 나타내는 배열
let nums = [0, 0, 0];

// (startX, startY)에서 시작하는 n*n 크기만큼 순회
function countNumbers(startX, startY, n) {
  const firstValue = matrix[startX][startY];
  // Base case
  if (n === 3) {
    if (isUniqueArray(matrix, startX, startY, 3)) {
      if (firstValue === -1) {
        nums[0]++;
      } else if (firstValue === 0) {
        nums[1]++;
      } else {
        nums[2]++;
      }
    } else {
      for (let i = startX; i < startX + n; i++) {
        for (let j = startY; j < startY + n; j++) {
          if (matrix[i][j] === -1) {
            nums[0]++;
          } else if (matrix[i][j] === 0) {
            nums[1]++;
          } else {
            nums[2]++;
          }
        }
      }
    }
    return;
  } else {
    // 모든 종이의 값이 같을 때
    if (isUniqueArray(matrix, startX, startY, n)) {
      if (firstValue === -1) {
        nums[0]++;
      } else if (firstValue === 0) {
        nums[1]++;
      } else if (firstValue === 1) {
        nums[2]++;
      }
      return;
      // 아닌 경우
    } else {
      // 9등분으로 나눠준다
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          countNumbers(3 * i, 3 * j, parseInt(n / 3));
        }
      }
    }
  }
}

// 배열에 있는 값들이 모두 같은지 판별하는 함수
function isUniqueArray(arr, startX, startY, n) {
  const firstElement = arr[startX][startY];
  for (let i = startX; i < startX + n; i++) {
    for (let j = startY; j < startY + n; j++) {
      if (arr[i][j] !== firstElement) {
        return false;
      }
    }
  }
  return true;
}
countNumbers(0, 0, +N);
console.log(nums.join('\n'));
