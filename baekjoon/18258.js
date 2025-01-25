class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
  }
  pop() {
    if (this.size === 0) return -1;
    else {
      let temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size -= 1;
      return temp.val;
    }
  }
}

const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.trim());

let result = [];
let queue = new Queue();

const num = parseInt(input[0]);
for (let i = 1; i <= num; i++) {
  let [cmd, value] = input[i].split(' ');
  switch (cmd) {
    case 'push':
      queue.push(parseInt(value));
      break;
    case 'pop':
      result.push(queue.pop());
      break;
    case 'front':
      result.push(queue.first === null ? -1 : queue.first.val);
      break;
    case 'back':
      result.push(queue.last === null ? -1 : queue.last.val);
      break;
    case 'size':
      result.push(queue.size);
      break;
    case 'empty':
      result.push(queue.size === 0 ? 1 : 0);
      break;
  }
}
console.log(result.join('\n'));

// typeError 미치겠다...
