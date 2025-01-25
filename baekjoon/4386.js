const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const map = Array.from({ length: +n }, () => Array(+n).fill(0));

function calculateDistance(a, b) {
  return +Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
}

let arr = [];

for (let i = 0; i < +n - 1; i++) {
  for (let j = i + 1; j < +n; j++) {
    let a = input[i].split(' ').map(Number);
    let b = input[j].split(' ').map(Number);
    let length = calculateDistance(a, b);
    map[i][j] = length;
    arr.push([i, j, length]);
  }
}

arr.sort((a, b) => a[2] - b[2]);
const parent = Array.from({ length: +n }, (_, index) => index);
const rank = Array(+n).fill(1);
function find(a) {
  if (parent[a] !== a) {
    parent[a] = find(parent[a]);
  }
  return parent[a];
}
function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);
  if (rootA !== rootB) {
    if (rank[rootA] > rank[rootB]) {
      parent[rootB] = rootA;
    } else if (rank[rootA] < rank[rootB]) {
      parent[rootA] = rootB;
    } else {
      parent[rootB] = rootA;
      rank[rootA]++;
    }
  }
}

let count = 0;
let minCost = 0;
for (let i = 0; i < arr.length; i++) {
  let [a, b, c] = arr[i];
  if (find(a) !== find(b)) {
    union(a, b);
    minCost += c;
    count++;
  }
  if (count === arr.length - 1) break;
}
console.log(minCost.toFixed(2));
/*



*/
