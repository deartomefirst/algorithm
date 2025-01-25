const input = +require('fs').readFileSync('input.txt', 'utf-8').trim();

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
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  dequeue() {
    if (this.size === 0) return null;
    let tmp = this.head;
    this.head = this.head.next;
    this.size--;
    return tmp.val;
  }
}

// 한번 줄어드는 과정이 직관적으로 보이지 않는 느낌이다. input말고 다른 값으로 해야할듯?

function discardCards(num) {
  if (num === 1) return 1;
  let queue = new Queue();
  for (let i = 1; i <= num; i++) {
    queue.enqueue(i);
  }
  for (let i = 1; i < num; i++) {
    queue.dequeue();
    if (queue.size === 1) return queue.head.val;
    queue.enqueue(queue.dequeue());
  }
}

console.log(discardCards(input));
