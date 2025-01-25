const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const arr = input.map((v) => v.split(''));

for (let i = 0; i < +n; i++) {
  let isBreak = false;
  for (let j = 0; j < +n; j++) {
    if (arr[i][j] === '*') {
      if (i - 1 < 0 || j - 1 < 0 || i + 1 >= n || j + 1 >= n) continue;
      if (
        arr[i - 1][j] === '*' &&
        arr[i][j - 1] === '*' &&
        arr[i + 1][j] === '*' &&
        arr[i][j + 1] === '*'
      ) {
        let [x, y] = [i, j];
        console.log(i + 1, j + 1);
        let leftArm = 0;
        let rightArm = 0;
        let waist = 0;
        while (y > 0 && arr[x][--y] === '*') {
          leftArm++;
        }
        [x, y] = [i, j];
        while (y < n - 1 && arr[x][++y] === '*') {
          rightArm++;
        }
        [x, y] = [i, j];
        while (arr[++x][y] === '*') {
          waist++;
        }
        let leftLeg = 0;
        let rightLeg = 0;
        let [waistX, waistY] = [x, y];
        while (arr[waistX][waistY - 1] === '*') {
          leftLeg++;
          waistX++;
          if (waistX >= n) break;
        }
        [waistX, waistY] = [x, y];
        while (arr[waistX][waistY + 1] === '*') {
          rightLeg++;
          waistX++;
          if (waistX >= n) break;
        }
        console.log(leftArm, rightArm, waist, leftLeg, rightLeg);
        isBreak = true;
      }
    }
  }
  if (isBreak) break;
}

let heartX, heartY;
for (let i = 0; i < n; i++) {
  if (arr[i].indexOf('*') !== -1) {
    heartX = i + 1;
    heartY = arr[i].indexOf('*');
    break;
  }
}
let leftArm = heartY - arr[heartX].indexOf('*');
let rightArm = arr[heartX].lastIndexOf('*') - heartY;
let waist = 0;
let leftLeg = 0;
let rightLeg = 0;
let [x, y] = [heartX, heartY];
while (arr[++x][y] === '*') {
  waist++;
}
let [waistX, waistY] = [x, y];
while (waistX < n && arr[waistX++][waistY - 1] === '*') {
  leftLeg++;
}
[waistX, waistY] = [x, y];
while (waistX < n && arr[waistX++][waistY + 1] === '*') {
  rightLeg++;
}
console.log(heartX + 1, heartY + 1);
console.log(leftArm, rightArm, waist, leftLeg, rightLeg);

// 심장의 위치를 생각보다 쉽게 구할 수 있다.
// 머리는 위부터 처음으로 '*'이 등장하는 부분의 아래에 위치하고 있다.
// 나머지 역시 한줄씩 쉽게 구할 수 있다. indexOf , lastIndexOf를 이용해서 쉽게 구할 수 있다.

// 미리 다리 위치를 고정시키고 넘어가는 것도 좋은듯
/*



*/
