const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...operations] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

// 최소힙
// 완전이진트리

const answer = [];
const heap = [];
for (let i = 0; i < N; i++) {
  if (operations[i] === 0) {
    answer.push(deleteMinHeap(heap));
  } else {
    insertHeap(operations[i]);
  }
}
console.log(answer.join('\n'));

function insertHeap(v) {
  heap.push(v);

  let index = heap.length - 1;
  while (index !== 0) {
    let parentIdx = Math.floor((index - 1) / 2);
    if (heap[index] >= heap[parentIdx]) break;
    [heap[index], heap[parentIdx]] = [heap[parentIdx], heap[index]];
    index = parentIdx;
  }
}

function deleteMinHeap(heap) {
  if (heap.length === 0) {
    return 0;
  }

  let index = 0;
  [heap[index], heap[heap.length - 1]] = [heap[heap.length - 1], heap[index]];
  let output = heap.pop();

  while (true) {
    let leftChildIdx = index * 2 + 1;
    let rightChildIdx = index * 2 + 2;
    let leftChild, rightChild;
    let swap = null;

    if (leftChildIdx < heap.length) {
      leftChild = heap[leftChildIdx];
      if (leftChild < heap[index]) {
        swap = leftChildIdx;
      }
    }
    if (rightChildIdx < heap.length) {
      rightChild = heap[rightChildIdx];
      if (
        (swap === null && rightChild < heap[index]) ||
        (swap !== null && rightChild < leftChild)
      ) {
        swap = rightChildIdx;
      }
    }
    if (swap === null) break;
    [heap[index], heap[swap]] = [heap[swap], heap[index]];
    index = swap;
  }
  return output;
}

/*

0 1 2 3 4 5 6


*/
