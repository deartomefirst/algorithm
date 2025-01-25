const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [a, b, c, d, e, f] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);
function solution(a, b, c, d, e, f) {
  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (a * x + b * y === c && d * x + e * y === f) {
        return `${x} ${y}`;
      }
    }
  }
}

console.log(solution(a, b, c, d, e, f));
/*

adx + bdy = cd 
adx + eay = fa

ax + by = c
dx + ey = f

연립 방정식의 해가 1개인 경우



분모가 0이 되는 경우를 제외해야 한다.

왜 답이 안되는거지...?

*/
