const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [testCase, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

function diffCounter(element) {
  const [str1, str2, str3] = element;
  let counter = 0;
  for (let i = 0; i < 4; i++) {
    if (str1[i] !== str2[i]) {
      counter++;
    }
    if (str2[i] !== str3[i]) {
      counter++;
    }
    if (str3[i] !== str1[i]) {
      counter++;
    }
  }
  return counter;
}
function solution(N, mbti) {
  // 무조건 중복되는 mbti가 3개 생겨서 심리적 거리가 0이 된다.
  if (N > 32) {
    console.log(0);
    return;
  }
  let mbtiCounter = {};
  for (const element of mbti) {
    mbtiCounter[element] = ++mbtiCounter[element] || 1;
    // 32개 이하의 경우에도 중복되는 mbti가 3개 이상인 경우 심리적 거리가 0이 된다.
    if (mbtiCounter[element] >= 3) {
      console.log(0);
      return;
    }
  }
  let counter = 8;

  // 순열조합 알고리즘을 사용해서 해결할 수도 있을 것 같다.
  for (let m = 0; m < mbti.length - 2; m++) {
    for (let n = m + 1; n < mbti.length - 1; n++) {
      for (let k = n + 1; k < mbti.length; k++) {
        counter = Math.min(diffCounter([mbti[m], mbti[n], mbti[k]]), counter);
      }
    }
  }

  console.log(counter);
}

for (let i = 0; i < +testCase; i++) {
  let N = +input[2 * i];
  let mbti = input[2 * i + 1].trim().split(' ');
  solution(N, mbti);
}
