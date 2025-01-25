const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, footprints] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const visited = Array.from({ length: 2001 }, () => Array(2001).fill(false));
visited[1000][1000] = true;
let count = 1;
let x = 1000;
let y = 1000;
for (let i = 0; i < footprints.length; i++) {
  if (footprints[i] === 'E') {
    x = x - 1;
  } else if (footprints[i] === 'W') {
    x = x + 1;
  } else if (footprints[i] === 'S') {
    y = y - 1;
  } else {
    y = y + 1;
  }
  // switch (footprints[i]) {
  //   case 'E':
  //     x = x - 1;
  //     break;
  //   case 'W':
  //     x = x + 1;
  //     break;
  //   case 'S':
  //     y = y - 1;
  //     break;
  //   case 'N':
  //     y = y + 1;
  //     break;
  // }
  if (!visited[x][y]) {
    count++;
    visited[x][y] = true;
  }
}
console.log(count);
