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
const [N, M, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const roads = Array.from({ length: +N + 1 }, () => []);
for (let i = 0; i < +M; i++) {
  let [s, f, c] = input[i].split(' ').map(Number);
  roads[s].push([f, c]);
}

const [start, finish] = input[M].split(' ').map(Number);
const pq = new MinHeap();
pq.insert([start, 0]);
const minCost = Array(+N + 1).fill(100000001);
minCost[start] = 0;

while (pq.arr.length > 0) {
  let [v, cost] = pq.extractMin();
  if (cost > minCost[v]) continue;

  for (const [next, nextCost] of roads[v]) {
    if (minCost[next] > cost + nextCost) {
      minCost[next] = cost + nextCost;
      pq.insert([next, minCost[next]]);
    }
  }
}
console.log(minCost[finish]);

/*
최소 비용을 계산하는 문제니까 출발했던 도시로 다시 오는 경우 x - visited로 확인
1
2 - 4 - 5
3 - 4 - 5
3 - 5
4 - 5
5
이렇게 된다.



*/

// start부터 finish까지 가는 경로를 찾을 것이다.
// visited 하지 않은 곳을 찾다가 5를 만나면 끝! -> 이때는 경로에 있는 값을 계산해서 min을 기록하자.
// visited를 기록할 수 없을 때 끝내기!

// 왜 이거는 minHeap 대신에 for문으로 도는게 빠를까?
//
