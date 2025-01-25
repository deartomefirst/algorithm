const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map((v) => +v);
const trees = input[1].split(' ').map((v) => +v);

function solve(x, tree, m) {
  let cur = 0;
  for (let i = 0; i < tree.length; ++i) {
    if (tree[i] <= x) continue;
    cur += tree[i] - x;
  }
  return cur >= m;
}

let start = 0;
let end = Math.max(...trees);

while (start < end) {
  let mid = Math.floor((start + end + 1) / 2);
  if (solve(mid, trees, M)) {
    start = mid;
  } else {
    end = mid - 1;
  }
}
console.log(start);

/*

+1을 해줘야 함...

0 47

24


46 42 40 26 4


ij  -> 26
i  j -> 34
i     j -> 36

  */
