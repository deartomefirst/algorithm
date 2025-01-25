const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const member = new Set();
let gomgom = 0;
for (let i = 1; i < +n; i++) {
  if (input[i] === 'ENTER') {
    gomgom += member.size;
    member.clear();
    continue;
  }
  member.add(input[i]);
}
gomgom += member.size;
console.log(gomgom);
