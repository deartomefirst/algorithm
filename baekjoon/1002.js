const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const answer = [];
for (let i = 0; i < +n; i++) {
  let [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);
  let larger = Math.max(r1, r2);
  let smaller = Math.min(r1, r2);
  let d = (x1 - x2) ** 2 + (y1 - y2) ** 2;
  // 위치와 거리가 모두 같은 경우
  if (x1 === x2 && y1 === y2 && r1 === r2) {
    answer.push(-1);
    // 두 원점 사이의 거리가 가장 긴 경우
  } else if ((r1 + r2) ** 2 === d) {
    answer.push(1);
  } else if ((larger - smaller) ** 2 === d) {
    answer.push(1);
  } else if ((r1 + r2) ** 2 < d) {
    answer.push(0);
  } else if ((larger - smaller) ** 2 > d) {
    answer.push(0);
  } else {
    answer.push(2);
  }
}
console.log(answer.join('\n'));

/*

두 점을 원점으로 하는 각각의 원이 만나는 점의 갯수를 구하는 문제




*/
