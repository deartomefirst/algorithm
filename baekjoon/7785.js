const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const set = new Set();
for (let i = 1; i <= +input[0]; i++) {
  let [name, log] = input[i].split(' ');
  if (log === 'enter') {
    set.add(name);
  } else if (log === 'leave') {
    set.delete(name);
  }
}
function compare(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
}

console.log([...set].sort(compare).join('\n'));
