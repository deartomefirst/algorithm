const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
const [num, ...cmds] = input;

class Queue {
  constructor() {
    this.queue = [];
  }
  push(val) {
    this.queue.push(val);
  }
  pop() {
    if (this.queue.length === 0) return -1;
    return this.queue.splice(0, 1);
  }
  size() {
    return this.queue.length;
  }
  empty() {
    if (this.queue.length === 0) return 1;
    else return 0;
  }
  front() {
    if (this.empty()) return -1;
    return this.queue[0];
  }
  back() {
    if (this.empty()) return -1;
    return this.queue[this.size() - 1];
  }
}
let result = [];
const queue = new Queue();
for (let i = 0; i < num; i++) {
  const [cmd, val] = cmds[i].split(' ');
  switch (cmd) {
    case 'push':
      queue.push(val);
      break;
    case 'pop':
      result.push(queue.pop());
      break;
    case 'size':
      result.push(queue.size());
      break;
    case 'empty':
      result.push(queue.empty());
      break;
    case 'front':
      result.push(queue.front());
      break;
    case 'back':
      result.push(queue.back());
      break;
    default:
      break;
  }
}
console.log(result.join('\n'));


/*
아쉬운 점
shift

기능만 구현하는 거라... 굳이 class로?

*/