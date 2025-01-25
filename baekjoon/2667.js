const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const town = input.map((v) => v.split('').map(Number));
let visited = Array.from({ length: +n }, () => Array(+n).fill(false));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let townCount = 0;
let apartment = [];

for (let i = 0; i < +n; i++) {
  for (let j = 0; j < +n; j++) {
    if (town[i][j] === 0 || visited[i][j]) continue;

    let temp = [[i, j]];
    visited[i][j] = true;
    let max = 1;
    townCount++;

    while (temp.length) {
      let [x, y] = temp.pop();

      for (let i = 0; i < 4; i++) {
        let newX = x + dx[i];
        let newY = y + dy[i];

        if (newX < 0 || newY < 0 || newX === +n || newY === +n) continue;
        if (town[newX][newY] === 0 || visited[newX][newY]) continue;

        temp.push([newX, newY]);
        max++;
        visited[newX][newY] = true;
      }
    }

    apartment.push(max);
  }
}

console.log(townCount + '\n' + apartment.sort((a, b) => a - b).join('\n'));

let str = 'as';
console.log(str + '??!');
