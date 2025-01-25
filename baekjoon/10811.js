const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [n, m] = nm.split(' ').map(Number);

const arr = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 0; i < m; i++) {
  let [s, f] = input[i].split(' ').map(Number);
  let copyArr = arr.slice(s - 1, f).reverse();
  let idx = s - 1;
  let copyIdx = 0;
  while (idx !== f) {
    arr[idx++] = copyArr[copyIdx++];
  }
}
console.log(arr.join(' '));
/*

1 2 3 4 5

2 1 3 4 5

2 1 4 3 5

3 4 1 2 5

*/
