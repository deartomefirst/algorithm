const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const maxHeap = [];
const answer = [];
for (let i = 0; i < T; i++) {
  if (input[i] === 0) {
    if (maxHeap.length === 0) {
      answer.push(0);
      continue;
    }

    [maxHeap[0], maxHeap[maxHeap.length - 1]] = [
      maxHeap[maxHeap.length - 1],
      maxHeap[0],
    ];
    let popElement = maxHeap.pop();
    answer.push(popElement);
    let now = 0;

    while (true) {
      let leftIndex = now * 2 + 1;
      let rightIndex = now * 2 + 2;
      let temp = now;
      if (leftIndex > maxHeap.length - 1) break;
      if (maxHeap[leftIndex] > maxHeap[now]) {
        temp = leftIndex;
      }
      if (
        maxHeap[rightIndex] > maxHeap[now] &&
        maxHeap[leftIndex] < maxHeap[rightIndex]
      ) {
        temp = rightIndex;
      }
      if (temp === now) break;
      [maxHeap[temp], maxHeap[now]] = [maxHeap[now], maxHeap[temp]];
      now = temp;
    }
  } else {
    maxHeap.push(input[i]);
    let now = maxHeap.length - 1;
    while (now !== 0) {
      let parent = Math.floor((now - 1) / 2);
      if (maxHeap[parent] >= maxHeap[now]) break;
      [maxHeap[parent], maxHeap[now]] = [maxHeap[now], maxHeap[parent]];
      now = parent;
    }
  }
}

console.log(answer.join('\n'));
