const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m] = nm.split(' ').map(Number);
const order = Array(n + 1).fill(0);
const curriculum = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  let [pre, later] = input[i].split(' ').map(Number);
  curriculum[pre].push(later);
  order[later] += 1;
}

let temp = [];
for (let i = 1; i <= n; i++) {
  if (order[i] === 0) {
    temp.push([i, 1]);
  }
}
let result = Array(n + 1).fill(0);
while (temp.length) {
  let [now, semester] = temp.shift();
  result[now] = semester;
  for (let nextLecture of curriculum[now]) {
    order[nextLecture] -= 1;
    if (order[nextLecture] === 0) {
      temp.push([nextLecture, semester + 1]);
    }
  }
}

console.log(result.slice(1).join(' '));
