const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MinHeap {
  constructor() {
    this.arr = [];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  size() {
    return this.arr.length;
  }

  getMin() {
    return this.arr[0];
  }

  swap(a, b) {
    let temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = temp;
  }

  insert(v) {
    this.arr.push(v);
    let cur = this.arr.length - 1;
    let parent = Math.floor((cur - 1) / 2);
    while (this.arr[parent] > this.arr[cur]) {
      this.swap(cur, parent);
      cur = parent;
      parent = Math.floor((cur - 1) / 2);
    }
  }

  extractMin() {
    if (this.arr.length === 0) return;
    const last = this.arr.length - 1;
    let cur = 0;
    this.swap(last, cur);
    const popValue = this.arr.pop();

    while (true) {
      let left = cur * 2 + 1;
      let right = cur * 2 + 2;
      let temp = cur;
      if (this.arr[left] < this.arr[cur]) {
        temp = left;
      }
      if (
        (temp === cur && this.arr[right] < this.arr[cur]) ||
        (temp === left && this.arr[right] < this.arr[left])
      ) {
        temp = right;
      }
      if (temp === cur) break;
      this.swap(temp, cur);
      cur = temp;
    }
    return popValue;
  }
}

const minHeap = new MinHeap();
let n = -1;
rl.on('line', function (line) {
  if (n === -1) {
    n = +line;
    return;
  }

  let temp = line.split(' ').map(Number);
  temp.forEach((v) => {
    minHeap.insert(v);
    if (minHeap.size() > n) minHeap.extractMin();
  });
  n--;
  if (n === 0) rl.close();
}).on('close', function () {
  console.log(minHeap.extractMin());
  process.exit();
});

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const [n, ...arr] = require('fs')
//   .readFileSync(filePath, 'utf-8')
//   .trim()
//   .split('\n')
//   .map((v) => v.split(' ').map(Number));

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     minHeap.insert(arr[i][j]);
//     if (minHeap.size() > n) {
//       minHeap.extractMin();
//     }
//   }
// }
// console.log(minHeap.extractMin());
