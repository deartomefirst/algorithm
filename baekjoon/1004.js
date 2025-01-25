const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [t, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
let idx = 0;
const answer = [];
for (let i = 0; i < +t; i++) {
  const [x1, y1, x2, y2] = input[idx++].split(' ').map(Number);
  const n = +input[idx++];
  let count = 0;
  for (let j = 0; j < n; j++) {
    let [x3, y3, r] = input[idx++].split(' ').map(Number);
    let d1 = (x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1);
    let d2 = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
    if ((d1 > r * r && d2 < r * r) || (d1 < r * r && d2 > r * r)) {
      count++;
    }
  }
  answer.push(count);
}
console.log(answer.join('\n'));
// 둘 다 원의 내부에 있으면 진입/이탈 x
// 하나의 원의 내부에 있으면 진입/이탈 +1
// 둘 다 원의 내부에 없으면 진입/이탈 x
// 출발점이나 도착점이 행성계 경계에 걸쳐진 경우 역시 입력으로 주어지지 않는다.
