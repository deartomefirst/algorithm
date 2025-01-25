const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n').map(v=>v.split(' ').map(Number));

const n = Number(input[0]);
const xArr = [];
const yArr = [];

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i];
  xArr.push(x);
  yArr.push(y);
}

xArr.sort((a, b) => a - b);
yArr.sort((a, b) => a - b);

let midX = xArr[Math.floor(n / 2)];
let midY = yArr[Math.floor(n / 2)];

let dist = 0;
dist += xArr.reduce((prev, cur) => Math.abs(midX - cur) + prev, 0);
dist += yArr.reduce((prev, cur) => Math.abs(midY - cur) + prev, 0);
console.log(dist);


// 어떻게 계산을 해야할까?
