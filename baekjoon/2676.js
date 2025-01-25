const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [t, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const T = +t;
const answer = [];
for (let i = 0; i < T; i++) {
  let [n, m] = input[i].split(' ').map(Number);
  if (m === 0 || n === m) {
    answer.push(1);
  } else {
    answer.push(1 + m * (n - m));
  }
}
console.log(answer.join('\n'));
/*

4R2

(3R1 * 3R2) + 1 / 2R1

라스칼의 삼각형
계산을 한번에 할 수 있는 방법이...

1 + 

1
1  1
1  2  1
1  3  3  1
1  4  5  4  1
1  5  7  7  5  1
1  6  9  10 9  6  1

1 + 3*(6-3)
*/
