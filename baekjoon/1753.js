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
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [V, E] = input[0].split(' ').map(Number);
const K = +input[1];

const graph = Array.from({ length: V + 1 }, () => []);

for (let i = 2; i < 2 + E; i++) {
  let [u, v, w] = input[i].split(' ').map(Number);
  graph[u].push([v, w]);
}

let minDistance = Array(V + 1).fill(200001);
minDistance[K] = 0;

const priorityQueue = new MinHeap();
priorityQueue.insert([K, 0]);

while (priorityQueue.arr.length !== 0) {
  let [v, w] = priorityQueue.extractMin();
  if (w > minDistance[v]) continue;

  for (const [next, weight] of graph[v]) {
    if (minDistance[next] > w + weight) {
      minDistance[next] = w + weight;
      priorityQueue.insert([next, minDistance[next]]);
    }
  }
}
console.log(
  minDistance
    .map((v) => (v === 200001 ? 'INF' : v))
    .slice(1)
    .join('\n')
);

// minHeap
