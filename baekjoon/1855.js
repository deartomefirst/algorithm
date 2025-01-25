const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, str] = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
n = +n;

// n X (str.lengt/n) 크기의 행렬을 만들어준다.
let result = Array.from({ length: str.length / n }, () => Array(n).fill(0));

// 나머지가 0인 행은 정방향으로, 나머지가 1인 행은 역방향으로
for (let i = 0; i < result.length; i++) {
  for (let j = 0; j < n; j++) {
    if (i % 2 === 0) {
      result[i][j] = str[i * n + j];
    } else {
      result[i][n - 1 - j] = str[i * n + j];
    }
  }
}

let newStr = '';

for (let i = 0; i < n; i++) {
  for (let j = 0; j < result.length; j++) {
    newStr += result[j][i];
  }
}
console.log(newStr);
