const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const heap = [];
const answer = [];
for (let i = 0; i < +n; i++) {
  // 최소 절댓값을 출력할 때
  if (input[i] === 0) {
    if (heap.length === 0) {
      answer.push(0);
    } else {
      let index = 0;
      [heap[index], heap[heap.length - 1]] = [
        heap[heap.length - 1],
        heap[index],
      ];
      let output = heap.pop();

      while (true) {
        let leftChildIdx = index * 2 + 1;
        let rightChildIdx = index * 2 + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < heap.length) {
          leftChild = heap[leftChildIdx];
          if (
            Math.abs(leftChild) < Math.abs(heap[index]) ||
            (Math.abs(leftChild) === Math.abs(heap[index]) &&
              leftChild < heap[index])
          ) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < heap.length) {
          rightChild = heap[rightChildIdx];
          if (
            (swap === null && Math.abs(rightChild) < Math.abs(heap[index])) ||
            (swap === null &&
              Math.abs(rightChild) === Math.abs(heap[index]) &&
              rightChild < heap[index]) ||
            (swap !== null && Math.abs(rightChild) < Math.abs(leftChild)) ||
            (swap !== null &&
              Math.abs(rightChild) === Math.abs(leftChild) &&
              rightChild < leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        [heap[index], heap[swap]] = [heap[swap], heap[index]];
        index = swap;
      }
      answer.push(output);
    }
    // 값을 삽입할 때 - 삽입하고
  } else {
    heap.push(input[i]);
    // 맨끝에 넣고 우선순위를 끌어올리는 작업을 해줘야 한다.
    let idx = heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (Math.abs(heap[parentIdx]) < Math.abs(heap[idx])) break;
      if (
        Math.abs(heap[idx]) === Math.abs(heap[parentIdx]) &&
        heap[parentIdx] <= heap[idx]
      ) {
        break;
      }
      [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
      idx = parentIdx;
    }
  }
}
console.log(answer.join('\n'));
