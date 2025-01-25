const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nb, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, B] = nb.split(' ').map(Number);

const matrix = input.map((v) => v.split(' ').map(Number));
let result = [];
function calMatrix(matrix, n) {
  if (n % 2 === 0) {
    return calMatrix(matrix, n / 2) * calMatrix(matrix, n / 2);
  } else {
    if (n === 3) {
    }

    return calMatrix(matrix, n);
  }
}

/*
n % 3 === 0



*/
