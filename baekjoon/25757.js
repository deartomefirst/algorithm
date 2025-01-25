const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nt, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [num, type] = nt.split(' ');
let set = new Set(input);

if (type === 'Y') {
  console.log(set.size);
} else if (type === 'F') {
  console.log(Math.floor(set.size / 2));
} else {
  console.log(Math.floor(set.size / 3));
}
