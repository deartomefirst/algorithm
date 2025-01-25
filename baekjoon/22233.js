const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
const set = new Set();

for (let i = 0; i < n; i++) {
  set.add(input[i]);
}
let answer = [];
for (let i = n; i < n + m; i++) {
  let used = input[i].split(',');
  used.forEach((v) => {
    if (set.has(v)) {
      set.delete(v);
    }
  });
  answer.push(set.size);
}
console.log(answer.join('\n'));
