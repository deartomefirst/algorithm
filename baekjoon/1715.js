const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

class MinHeap {
  constructor() {
    this.arr = [];
  }

  insert(v) {
    this.arr.push(v);
    let now = this.getSize() - 1;

    while (now !== 0) {
      let parentIdx = Math.floor((now - 1) / 2);
      if (this.arr[now] >= this.arr[parentIdx]) break;
      [this.arr[now], this.arr[parentIdx]] = [
        this.arr[parentIdx],
        this.arr[now],
      ];
      now = parentIdx;
    }
  }

  getSize() {
    return this.arr.length;
  }

  extractMin() {
    if (this.getSize() === 1) {
      return this.arr.pop();
    }
    [this.arr[0], this.arr[this.getSize() - 1]] = [
      this.arr[this.getSize() - 1],
      this.arr[0],
    ];
    let min = this.arr.pop();
    let parentIdx = 0;
    while (true) {
      let leftIdx = parentIdx * 2 + 1;
      let rightIdx = parentIdx * 2 + 2;
      let temp = null;
      if (leftIdx < this.getSize()) {
        if (this.arr[leftIdx] < this.arr[parentIdx]) {
          temp = leftIdx;
        }
      }
      if (rightIdx < this.getSize()) {
        if (
          (temp === null && this.arr[rightIdx] < this.arr[parentIdx]) ||
          (temp !== null && this.arr[rightIdx] < this.arr[leftIdx])
        ) {
          temp = rightIdx;
        }
      }
      if (temp === null) break;
      [this.arr[parentIdx], this.arr[temp]] = [
        this.arr[temp],
        this.arr[parentIdx],
      ];
      parentIdx = temp;
    }
    return min;
  }
}

const minHeap = new MinHeap();
input.forEach((v) => minHeap.insert(v));
console.log('inser', minHeap);
if (n === 1) {
  console.log(0);
} else if (n === 2) {
  console.log(input[0] + input[1]);
} else {
  let accSum = 0;
  while (true) {
    let min = minHeap.extractMin();
    let min2 = minHeap.extractMin();
    let sum = min + min2;
    accSum += sum;
    minHeap.insert(sum);
    console.log(minHeap);
    if (minHeap.getSize() === 1) {
      console.log(accSum);
      break;
    }
  }
}

// 어떻게 해야 작게 비교를 할까?
// 결국 두 묶음을 비교하는 일은...
// 오름차순으로 정렬하고 작은 순서부터 비교하면서 비교 횟수를 기록해서 출력하면 된다.
// 배열에서 항상 최소의 값을 뽑아내야 함!!
