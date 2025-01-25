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
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
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

class MaxHeap {
  constructor() {
    this.arr = [];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }

  getMax() {
    return this.arr[0];
  }

  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }

  insert(v) {
    this.arr.push(v);
    let cur = this.arr.length - 1;
    let parent = Math.floor((cur - 1) / 2);
    while (this.arr[parent] < this.arr[cur]) {
      this.swap(cur, parent);
      cur = parent;
      parent = Math.floor((cur - 1) / 2);
    }
  }

  extractMax() {
    if (this.arr.length === 0) return;
    const last = this.arr.length - 1;
    let cur = 0;
    this.swap(last, cur);
    const popValue = this.arr.pop();

    while (true) {
      let left = cur * 2 + 1;
      let right = cur * 2 + 2;
      let temp = cur;
      if (this.arr[left] > this.arr[cur]) {
        temp = left;
      }
      if (
        (temp === cur && this.arr[right] > this.arr[cur]) ||
        (temp === left && this.arr[right] > this.arr[left])
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

class MedianHeap {
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
    this.median = null;
    this.cnt = 0;
  }

  insert(v) {
    this.cnt++;
    if (this.minHeap.isEmpty() && this.maxHeap.isEmpty()) {
      this.median = v;
    }
    if (v <= this.median) {
      this.maxHeap.insert(v);
    } else {
      this.minHeap.insert(v);
    }
    this.sort();
  }

  sort() {
    while (Math.abs(this.maxHeap.size() - this.minHeap.size()) > 1) {
      if (this.maxHeap.size() < this.minHeap.size()) {
        this.maxHeap.insert(this.minHeap.extractMin());
      } else {
        this.minHeap.insert(this.maxHeap.extractMax());
      }
    }

    if (this.cnt % 2 === 0) {
      this.median = this.maxHeap.getMax();
    } else {
      this.median =
        this.minHeap.size() > this.maxHeap.size()
          ? this.minHeap.getMin()
          : this.maxHeap.getMax();
    }
  }

  getMedian() {
    return this.median;
  }
}
const medianHeap = new MedianHeap();
const answer = [];
for (let i = 0; i < n; i++) {
  medianHeap.insert(input[i]);
  answer.push(medianHeap.getMedian());
}
console.log(answer.join('\n'));
/*

어떻게 나올 것인지...

중간값보다 크면 minHeap에
작으면 maxHeap에 넣자.

1 -> 값이 하나니까 median
5 는 median 값인 1보다 크니까
minHeap에 넣자.



minHeap 5 5 7 10 


maxHeap 2 1 -99

*/
