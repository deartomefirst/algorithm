const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

function pulling(arr) {
  if (arr.length === 2) {
    return findSecond([arr[0][0], arr[0][1], arr[1][0], arr[1][1]]);
  }
  let newArr = Array.from({ length: arr.length / 2 }, () =>
    Array(arr.length / 2).fill(0)
  );

  for (let i = 0; i < arr.length; i += 2) {
    for (let j = 0; j < arr.length; j += 2) {
      newArr[i / 2][j / 2] = findSecond([
        arr[i][j],
        arr[i][j + 1],
        arr[i + 1][j],
        arr[i + 1][j + 1],
      ]);
    }
  }
  return pulling(newArr);
}

function findSecond(arr) {
  return arr.sort((a, b) => a - b)[2];
}

console.log(pulling(input.map((v) => v.split(' ').map(Number))));

/*

00 02
20 22


*/
