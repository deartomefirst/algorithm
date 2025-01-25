const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, k], ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const cards = input.flat();
const visited = Array(n * k).fill(false);

let deleted = 0;
let idx = 0;
while (deleted !== n * k - 1) {
  let move = cards[idx];
  visited[idx] = true;
  deleted++;

  for (let i = 1; i <= move; i++) {
    if (visited[(idx + i) % (n * k)]) move++;
  }
  idx = (idx + move) % (n * k);
}
console.log(Math.floor(idx / k) + 1, cards[idx]);
