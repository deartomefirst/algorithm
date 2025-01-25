const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let sortedPillars = input
  .map((line) => {
    const [l, h] = line.split(' ').map(Number);
    return { l, h };
  })
  .sort((a, b) => a.l - b.l);

let maxHeight = 0;
let maxIndex = 0;

// 가장 높은 기둥 중에서 제일 왼쪽의 index 값도 변수에 넣어준다.
for (let i = 0; i < N; i++) {
  if (sortedPillars[i].h > maxHeight) {
    maxHeight = sortedPillars[i].h;
    maxIndex = i;
  }
}

let area = 0;
// 왼쪽부터 가장 높은 기둥의 제일 왼쪽 인덱스 전까지의 면적
let currentHeight = 0;
for (let i = 0; i <= maxIndex; i++) {
  if (sortedPillars[i].h > currentHeight) {
    currentHeight = sortedPillars[i].h;
  }
  if (i < maxIndex) {
    area += currentHeight * (sortedPillars[i + 1].l - sortedPillars[i].l);
  }
}
// 오른쪽부터 제일 왼쪽에 위치한 가장 높은 기둥의 오른쪽 면적(가장 높은 기둥이 여러개라면 그 부분도 포함된다)
currentHeight = 0;
for (let i = N - 1; i > maxIndex; i--) {
  if (sortedPillars[i].h > currentHeight) {
    currentHeight = sortedPillars[i].h;
  }
  area += currentHeight * (sortedPillars[i].l - sortedPillars[i - 1].l);
}
// 기준이 되는 인덱스에 위치한 기둥의 면적
area += maxHeight;

console.log(area);

/*




*/
