const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim();

let set = new Set(['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']);
let count = 0;
for (let i = 0; i < input.length; i++) {
  if (set.has(input[i] + input[i + 1] + input[i + 2])) {
    count++;
    i += 2;
    continue;
  } else if (set.has(input[i] + input[i + 1])) {
    count++;
    i += 1;
    continue;
  } else {
    count++;
  }
}

console.log(count);
