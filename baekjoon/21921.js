const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nx, arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [n, x] = nx.split(' ').map(Number);
const visited = arr.split(' ').map(Number);

let now = 0;
for (let i = 0; i < x; i++) {
  now += visited[i];
}
let max = now;
let count = 1;
for (let i = x; i < n; i++) {
  now = now - visited[i - x] + visited[i];
  if (max < now) {
    max = now;
    count = 1;
  } else if (max === now) {
    count++;
  }
}
if (max === 0) {
  console.log('SAD');
} else {
  console.log(max + '\n' + count);
}
