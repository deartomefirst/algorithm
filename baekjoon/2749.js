const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let idx = 0;
const [n, m] = input[idx++].split(' ').map(Number);
const matrixNM = [];
for (let i = 1; i <= n; i++) {
  matrixNM.push(input[idx++].split(' ').map(Number));
}
const [_, k] = input[idx++].split(' ').map(Number);
const matrixMK = Array.from({ length: k }, () => []);
for (let i = 1; i <= m; i++) {
  input[idx++].split(' ').map((v, i) => {
    matrixMK[i].push(+v);
  });
}

const answer = Array.from({ length: n }, () => []);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < k; j++) {
    let [a, b] = matrixNM[i];
    let [c, d] = matrixMK[j];

    answer[i].push(a * c + b * d);
  }
}
console.log(answer.map((v) => v.join(' ')).join('\n'));
