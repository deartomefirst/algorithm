const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

console.log(n, m);
console.log(input);
// 종이 위에 정육면체가 하나씩은 있기 때문에 위아래에서 본 넓이
let side1 = 0;
let side2 = 0;
let side3 = n * m;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (j === 0) {
      side1 += input[i][j];
    } else {
      if (input[i][j] > input[i][j - 1]) {
        side1 += input[i][j] - input[i][j - 1];
      }
    }
  }
}

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
//     if (j === 0) {
//       side2 += input[i][j];
//     } else {
//       if (input[i][j] > input[i][j - 1]) {
//         side2 += input[i][j] - input[i][j - 1];
//       }
//     }
//   }
// }

for (let j = 0; j < m; j++) {
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      side2 += input[i][j];
    } else {
      if (input[i][j] > input[i - 1][j]) {
        side2 += input[i][j] - input[i - 1][j];
      }
    }
  }
}

// for (let j = 0; j < m; j++) {
//   for (let i = 0; i < n; i++) {
//     if (i === 0) {
//       side4 += input[i][j];
//     } else {
//       if (input[i][j] > input[i - 1][j]) {
//         side4 += input[i][j] - input[i - 1][j];
//       }
//     }
//   }
// }

console.log((side1 + side2 + side3) * 2);
