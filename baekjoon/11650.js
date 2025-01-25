const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

function compare(a, b) {
  const [xofA, yofA] = a.split(' ').map((v) => +v);
  const [xofB, yofB] = b.split(' ').map((v) => +v);
  if (xofA < xofB) return -1;
  else if (xofA > xofB) return 1;
  else {
    if (yofA < yofB) return -1;
    else if (yofA > yofB) return 1;
    else {
      return 0;
    }
  }
}

console.log(arr.sort(compare).join('\n'));
