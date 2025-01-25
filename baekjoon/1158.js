/*

요세푸스 순열
7 3
1 2 3 4 5 6 7
3제거
6 7 1 2 4 5

queue로 돌리고 N명의 사람이 모두 제거되면 그때 출력


1 2 3 4 5 6 7



*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.size) return null;
    let output = this.head;
    this.head = this.head.next;
    this.size--;
    return output.val;
  }
}

const [n, k] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split(' ')
  .map((v) => +v);

let result = [];
const queue = new Queue();
for (let i = 1; i <= n; i++) {
  queue.enqueue(i);
}
while (result.length !== n) {
  for (let i = 0; i < k - 1; i++) {
    queue.enqueue(queue.dequeue());
  }
  result.push(queue.dequeue());
}
console.log('<' + result.join(', ') + '>');

/*

다르게 푸는 방법이 많다.
잘 정리하고 어떤 상황에서 적용할 수 있는지 생각해보자.


*/
