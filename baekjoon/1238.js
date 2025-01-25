class MinHeap {
  constructor() {
    this.arr = [];
  }

  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }

  insert(node) {
    this.arr.push(node);
    let index = this.arr.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.arr[parent][1] <= this.arr[index][1]) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  extractMin() {
    if (this.arr.length === 0) return;
    if (this.arr.length === 1) return this.arr.pop();
    this.swap(this.arr.length - 1, 0);
    let min = this.arr.pop();
    let index = 0;
    while (true) {
      let lIndex = index * 2 + 1;
      let rIndex = index * 2 + 2;
      let temp = index;
      if (lIndex < this.arr.length && this.arr[lIndex][1] < this.arr[temp][1]) {
        temp = lIndex;
      }
      if (rIndex < this.arr.length && this.arr[rIndex][1] < this.arr[temp][1]) {
        temp = rIndex;
      }
      if (temp === index) break;
      this.swap(temp, index);
      index = temp;
    }
    return min;
  }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NMX, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const [N, M, X] = NMX.split(' ').map(Number);

const map = Array.from({ length: N + 1 }, () => []);
const reverseMap = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  let [A, B, T] = input[i].split(' ').map(Number);
  map[A].push([B, T]);
  reverseMap[B].push([A, T]);
}

const minTime = Array(N + 1).fill(Infinity);
const minRevereseTime = Array(N + 1).fill(Infinity);
minTime[X] = 0;
minRevereseTime[X] = 0;

const pq = new MinHeap();
const reversePq = new MinHeap();

pq.insert([X, 0]);
reversePq.insert([X, 0]);
while (pq.arr.length) {
  let [v, w] = pq.extractMin();
  if (w > minTime[v]) continue;

  for (const [next, weight] of map[v]) {
    if (minTime[next] > w + weight) {
      minTime[next] = w + weight;
      pq.insert([next, minTime[next]]);
    }
  }
}

while (reversePq.arr.length) {
  let [v, w] = reversePq.extractMin();
  if (w > minRevereseTime[v]) continue;

  for (const [next, weight] of reverseMap[v]) {
    if (minRevereseTime[next] > w + weight) {
      minRevereseTime[next] = w + weight;
      reversePq.insert([next, minRevereseTime[next]]);
    }
  }
}
let max = 0;
for (let i = 1; i <= N; i++) {
  let time = minTime[i] + minRevereseTime[i];
  if (max < time) {
    max = time;
  }
}
console.log(max);
// 2

/*
최단시간으로 가는 것을 구하고 최소값과 비교해서 출력

최단 경로를 구하는 알고리즘을 경험하면 해결할 수 있다.


1트 27% 시간초과 플로이드로 구현했는데 시간초과!
플로이드 알고리즘 -> 27%
O(V^3)

왜 데이크스트라로 해결하는걸까?
2번 마을에서 파티가 열린다고 가정하자.
1. 각자의 마을에서 2번으로 가는 최단 시간을 구하고
2. 2번에서 각자의 마을로 가는 최단 시간을 구해서 더해주면 된다.

2번의 경우는 다익스트라 알고리즘을 적용하면 된다.
1번은



데이크스트라는 특정 1

*/
