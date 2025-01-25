const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [L, arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const aArr = arr.split(' ').map(Number);
const numCoord = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
};

function isUsablePattern(arr) {
  let visited = Array(10).fill(false);
  visited[arr[0]] = true;
  for (let i = 1; i < arr.length; i++) {
    if (visited[arr[i]]) return 'NO';
    let [finishX, finishY] = numCoord[arr[i]];
    let [startX, startY] = numCoord[arr[i - 1]];

    let distanceX = finishX - startX;
    let distanceY = finishY - startY;
    if (Math.abs(distanceX) >= 2 && Math.abs(distanceY) >= 2) {
      if (!visited[5]) return 'NO';
    } else if (
      (Math.abs(distanceX) >= 2 && distanceY === 0) ||
      (Math.abs(distanceY) >= 2 && distanceX === 0)
    ) {
      if (!visited[(arr[i] + arr[i - 1]) / 2]) return 'NO';
    }
    visited[arr[i]] = true;
  }
  return 'YES';
}

console.log(isUsablePattern(aArr));
