const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.front = null;
    this.back = null;
  }
}

class Deck {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enQueue(value) {
    let newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.first.front = newNode;
      newNode.back = this.first;
      this.first = newNode;
    }
    this.size++;
  }

  deQueue() {
    if (this.size === 0) return -1;
    else {
      let firstNode = this.first;
      this.first = firstNode.back;
      this.size--;
      if (this.size === 0) {
        this.last = null;
      }
      return firstNode.value;
    }
  }

  push(value) {
    let newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.front = this.last;
      this.last.back = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) return -1;
    else {
      let lastNode = this.last;
      this.last = lastNode.front;
      this.size--;
      if (this.size === 0) {
        this.first = null;
      }
      return lastNode.value;
    }
  }
}

const deck = new Deck();
const answer = [];

for (let i = 0; i < +n; i++) {
  let [type, num] = input[i].split(' ').map(Number);
  console.log(type, num);
  switch (type) {
    case 1:
      deck.enQueue(num);
      break;
    case 2:
      deck.push(num);
      break;
    case 3:
      answer.push(deck.deQueue());
      break;
    case 4:
      answer.push(deck.pop());
      break;
    case 5:
      answer.push(deck.size);
      break;
    case 6:
      answer.push(deck.size === 0 ? 1 : 0);
      break;
    case 7:
      answer.push(deck.size === 0 ? -1 : deck.first.value);
      break;
    case 8:
      answer.push(deck.size === 0 ? -1 : deck.last.value);
  }
}

console.log(answer.join('\n'));
