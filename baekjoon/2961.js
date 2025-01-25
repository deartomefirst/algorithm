const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const taste = input.map((v) => v.split(' ').map(Number));

function minTasteDiff(k) {
  // 순열과 조합으로 계산할 수 있을 것 같다.
  // 전체의 경우를 구하고 순환하면서 min 값을 찾아주자.
  // 시간복잡도 괜찮을까? 10억의 크기를 가졌다. js에서 BigInt 기준은?
  if (k <= +N) {
    let 
  }


}

console.log(taste);
