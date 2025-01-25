// const fs = require('fs');
// // var input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('input.txt').toString().split('\n');
// const [num, ...commands] = input;
// console.log('num :', num, commands);
// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//   push(item) {
//     this.stack.push(item);
//   }
//   pop() {
//     if (this.stack.length === 0) {
//       console.log(-1);
//     } else console.log(this.stack.pop());
//   }
//   size() {
//     console.log(this.stack.length);
//   }
//   empty() {
//     if (this.stack.length === 0) {
//       console.log(-1);
//     } else console.log(0);
//   }
//   top() {
//     if (this.stack.length === 0) {
//       console.log(-1);
//     } else {
//       console.log(this.stack[this.stack.length - 1]);
//     }
//   }
// }

// const myStack = new Stack();

// for (let i = 0; i < num; i++) {
//   const [cmd, num] = commands[i].split(' ');

//   switch (cmd) {
//     case 'push':
//       myStack.push(num);
//       break;
//     case 'pop':
//       myStack.pop();
//       break;
//     case 'size':
//       myStack.size();
//       break;
//     case 'empty':
//       myStack.empty();
//       break;
//     default: // top
//       myStack.top();
//       break;
//   }
// }

// 왜 순서를 반대로 했나? push, pop이 상수값의 시간이 들게 하기 위해서...
/*

push X: 정수 X를 스택에 넣는 연산이다.
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

*/
const fs = require('fs');
const [num, ...cmds] = fs.readFileSync('input.txt').toString().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    ++this.size;
  }
  pop() {
    if (!this.first) return -1;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  sizeStack() {
    return this.size;
  }
  empty() {
    if (this.size === 0) return 1;
    return 0;
  }
  top() {
    if (this.size !== 0) {
      return this.first.value;
    } else {
      return -1;
    }
  }
}

const stack = new Stack();
let result = [];
for (let i = 0; i < num; i++) {
  const [cmd, val] = cmds[i].split(' ');
  console.log(cmd, val);
  switch (cmd) {
    case 'push':
      stack.push(val);
      break;
    case 'pop':
      result.push(stack.pop());
      break;
    case 'size':
      result.push(stack.sizeStack());
      break;
    case 'empty':
      result.push(stack.empty());
      break;
    case 'top': // top
      result.push(stack.top());
      break;
    default:
      break;
  }
  console.log(stack);
}
console.log(result.join('\n').trim());
