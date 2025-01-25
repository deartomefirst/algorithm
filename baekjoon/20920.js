const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, M] = nm.split(' ').map(Number);

const map = new Map();

for (let i = 0; i < N; i++) {
  if (input[i].length < M) continue;
  if (map.has(input[i])) {
    map.set(input[i], map.get(input[i]) + 1);
  } else {
    map.set(input[i], 1);
  }
}

const mapToArr = [...map];

function compare(a, b) {
  if (a[1] < b[1]) return 1;
  if (a[1] > b[1]) return -1;

  if (a[0].length < b[0].length) return 1;
  if (a[0].length > b[0].length) return -1;

  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  return 0;
}

console.log(
  mapToArr
    .sort(compare)
    .map((v) => v[0])
    .join('\n')
);
