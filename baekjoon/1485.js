const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [num, ...points] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

points = points.map((v) => v.split(' ').map((val) => +val));

function isSquare(squarePoints) {
  // 점 4개로 만들 수 있는 직선 6개를 구하고

  let length = [];
  for (let i = 0; i < squarePoints.length; i++) {
    for (let j = i + 1; j < squarePoints.length; j++) {
      length.push(
        Math.pow(squarePoints[i][0] - squarePoints[j][0], 2) +
          Math.pow(squarePoints[i][1] - squarePoints[j][1], 2)
      );
    }
  }
  length = length.sort((a, b) => a - b);
  let [a, b, c, d, e, f] = length;
  if (a === b && b === c && c === d && e === f && a !== e) return 1;
  return 0;
}

for (let i = 0; i < num; i++) {
  let squarePoints = [
    points[4 * i],
    points[4 * i + 1],
    points[4 * i + 2],
    points[4 * i + 3],
  ];

  if (isSquare(squarePoints)) {
    console.log(1);
  } else {
    console.log(0);
  }
}

// 정사각형인 것을 어떻게 확인할까?
// 4변의 길이가 같고, 기울기의 곱이 -1인 것
//
//
