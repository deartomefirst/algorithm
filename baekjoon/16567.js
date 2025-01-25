const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, r, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m] = nm.split(' ').map(Number);
const road = r.split(' ').map(Number);
let count = 0;

for (let i = 0; i < n; i++) {
  if (i === 0 && road[i] === 1) count++;
  else if (road[i - 1] === 0 && road[i] === 1) count++;
}

const answer = [];
for (let i = 0; i < m; i++) {
  let [type, num] = input[i].split(' ').map(Number);
  if (type === 0) {
    answer.push(count);
  } else {
    num -= 1;
    if (road[num] === 1) continue;

    road[num] = 1;
    let check = 0;

    if (num - 1 >= 0 && road[num - 1] === 1) check++;
    if (num + 1 < n && road[num + 1] === 1) check++;
    if (check === 1) continue;
    if (check === 2) {
      count--;
    } else {
      count++;
    }
  }
}
console.log(answer.join('\n'));
