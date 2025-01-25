const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const N = +input[0];
const diggingCostArr = [];
for (let i = 1; i <= N; i++) {
  diggingCostArr.push(+input[i]);
}
const pullCostGraph = [];
for (let i = N + 1; i <= 2 * N; i++) {
  pullCostGraph.push(input[i].split(' ').map(Number));
}

console.log(diggingCostArr);
console.log(pullCostGraph);

class minHeap {
  constructor() {
    this.arr = [];
  }

  insert(node) {
    if (this.arr.length === 0) {
      this.arr.push(node);
    } else {
    }
  }

  extractMin() {}
}
