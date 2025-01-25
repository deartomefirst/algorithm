const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [size, ...matrixs] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [n, m] = size.split(' ').map((v) => +v);
matrixs = matrixs.map((v) => v.split(' ').map((v) => +v));

for (let i = 0; i < n; i++) {
  let rowResult = [];
  for (let j = 0; j < m; j++) {
    rowResult.push(matrixs[i][j] + matrixs[i + n][j]);
  }
  console.log(rowResult.join(' '));
}
