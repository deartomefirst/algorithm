const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map(Number);
const town = input.map((v) => v.split(' ').map(Number));

const home = [];
const store = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (town[i][j] === 1) home.push([i, j]);
    else if (town[i][j] === 2) store.push([i, j]);
  }
}

const calDistance = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

const visited = Array(store.length).fill(false);
const result = [];
const arr = [];

// 치킨집 선택하기 위한 조합
function backtrack(count, M, start) {
  if (count === M) {
    result.push([...arr]);
    return;
  }

  for (let i = start; i < store.length; i++) {
    if (!visited[i]) {
      arr.push(i);
      visited[i] = true;
      backtrack(count + 1, M, i);
      arr.pop();
      visited[i] = false;
    }
  }
}
backtrack(0, M, 0);


let min = Infinity;
for (let i = 0; i < result.length; i++) {
  let minDistance = Array(home.length).fill(99);
  let chickens = result[i];

  for (let j = 0; j < home.length; j++) {
    let h = home[j];
    chickens.forEach((v) => {
      minDistance[j] = Math.min(minDistance[j], calDistance(store[v], h));
    });
  }

  min = Math.min(
    min,
    minDistance.reduce((pre, cur) => pre + cur, 0)
  );
}

console.log(min);
