class DualPriorityQueue {
  constructor() {
    this.minHeap = [];
    this.maxHeap = [];
    this.entryObj = {};
  }
  swap(a, b, arr) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }

  insert(val) {
    this.minHeap.push(val);
    /*
    val을 기준으로 parent와 비교하며 최솟값을 올려준다.
    */
    let cur = this.minHeap.length - 1;
    let parent = Math.floor((cur - 1) / 2);
    while (this.minHeap[cur] < this.minHeap[parent]) {
      this.swap(cur, parent, this.minHeap);
      cur = parent;
      parent = Math.floor((cur - 1) / 2);
    }

    this.maxHeap.push(val);
    cur = this.maxHeap.length - 1;
    parent = Math.floor((cur - 1) / 2);
    while (this.maxHeap[cur] > this.maxHeap[parent]) {
      this.swap(cur, parent, this.maxHeap);
      cur = parent;
      parent = Math.floor((cur - 1) / 2);
    }
    /*
    val을 기준으로 parent와 비교하며 최댓값을 올려준다.
    */
    this.entryObj[val] = (this.entryObj[val] || 0) + 1;
  }

  popMin() {}
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const T = +input[0];

/*



우선순위 큐에서 heap

set으로 삭제 여부를 확인하면 중복값에 대해서 대처를 하지 못한다.

[[16 ,0] , [-5643,1]]

[-5643 ]

2
7
I 16
I -5643
D -1
D 1
D 1
I 123
D -1
9
I -45
I 653
D 1
I -642
I 45
I 97
D 1
D -1
I 333


1
2 3 
4 5 6 7

*/
