const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = Number(input.shift());

const map = [];
const cur = [];

for (let i = 0; i < n; i++) {
  let mapArr = input[i].split('');
  let curArr = input[i + n].split('');
  map.push(mapArr);
  cur.push(curArr);
}

const dx = [1, 0, -1, 0, 1, 1, -1, -1];
const dy = [0, 1, 0, -1, 1, -1, 1, -1];
let isOpen = false;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (cur[i][j] === 'x') {
      if (map[i][j] === '*') {
        isOpen = true;
      }
      let count = 0;
      for (let k = 0; k < 8; k++) {
        let newX = i + dx[k];
        let newY = j + dy[k];
        if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
          if (map[newX][newY] === '*') count++;
        }
      }
      cur[i][j] = count;
    }
  }
}
if (isOpen) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === '*') {
        cur[i][j] = '*';
      }
    }
  }
}
for (let i = 0; i < n; i++) {
  let print = '';
  cur[i].map((el) => (print += el));
  console.log(print);
}
