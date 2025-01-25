/*

덱 Deque

*/

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  pushFront(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.front.prev = newNode;
      newNode.next = this.front;
      this.front = newNode;
    }
    this.size++;
  }
  pushBack(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      newNode.prev = this.back;
      this.back = newNode;
    }
    this.size++;
  }

  popFront() {
    if (this.size === 0) return -1;
    let temp = this.front;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.front = temp.next;
      this.front.prev = null;
      temp.next = null;
    }
    this.size--;
    return temp.val;
  }
  popBack() {
    if (this.size === 0) return -1;
    let temp = this.back;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.back = temp.prev;
      this.back.next = null;
      temp.prev = null;
    }
    this.size--;
    return temp.val;
  }

  empty() {
    return this.size === 0 ? 1 : 0;
  }
  frontDeque() {
    return this.size === 0 ? -1 : this.front.val;
  }
  backDeque() {
    return this.size === 0 ? -1 : this.back.val;
  }
}

const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map((v) => v.trim());

let result = [];
let deque = new Deque();
for (let i = 1; i <= +input[0]; i++) {
  const [cmd, num] = input[i].split(' ');

  switch (cmd) {
    case 'push_front':
      deque.pushFront(+num);
      break;
    case 'push_back':
      deque.pushBack(+num);
      break;
    case 'pop_front':
      result.push(deque.popFront());
      break;
    case 'pop_back':
      result.push(deque.popBack());
      break;
    case 'size':
      result.push(deque.size);
      break;
    case 'empty':
      result.push(deque.empty());
      break;
    case 'front':
      result.push(deque.frontDeque());
      break;
    case 'back':
      result.push(deque.backDeque());
      break;
  }
}

console.log(result.join('\n'));

/*

property name이랑 메소드 이름이랑 같으면 안된다.


*/
