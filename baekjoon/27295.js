const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [n, b] = input[0].split(' ').map(Number);

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

function solution(input, n, b) {
  let a = 0;
  let sum = 0;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    sum += y - b;
    a += x;
  }
  // a1이 여러개 존재할 경우는 a1의 계수가 0인 경우
  if (a === 0) return 'EZPZ';
  // 분자가 0인 경우에는 a1이 0이 된다.
  if (sum === 0) return 0;

  let sign = a * sum > 0 ? 1 : -1;
  let absA = Math.abs(a);
  let absSum = Math.abs(sum);
  let gcdValue = gcd(absA, absSum);
  answer =
    absSum / absA === Math.floor(absSum / absA)
      ? (absSum * sign) / absA
      : `${(absSum * sign) / gcdValue}/${absA / gcdValue}`;

  return answer;
}

console.log(solution(input, n, b));

/*


a1*(-1) +1 -1 
a1*2 +1 -1

a1 + 4
a1 = -4

-a1 +5 -6
-a1 -1
*/
