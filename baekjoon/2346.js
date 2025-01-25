const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let arr = input.split(' ').map((v, i) => [+v, i + 1]);

const answer = [];

while (true) {
  let popped = arr.shift();
  answer.push(popped[1]);
  if (arr.length === 0) break;
  let moveNum = popped[0];

  if (moveNum > 0) {
    moveNum -= 1;
  }

  while (moveNum !== 0) {
    if (moveNum > 0) {
      arr.push(arr.shift());
      moveNum--;
    } else {
      arr.unshift(arr.pop());
      moveNum++;
    }
  }
}

console.log(answer.join(' '));

// 메모리 초과가 발생한다.
// 4mb의 메모리를 어떻게 사용해야하나...?

// class Node {
//   constructor(value, index) {
//     this.value = value;
//     this.index = index;
//     this.front = null;
//     this.back = null;
//   }
// }

// class Deck {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   enQueue(value, index) {
//     let newNode = new Node(value, index);

//     if (this.size === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.first.front = newNode;
//       newNode.back = this.first;
//       this.first = newNode;
//     }
//     this.size++;
//   }

//   deQueue() {
//     if (this.size === 0) return -1;
//     else {
//       let firstNode = this.first;
//       this.first = firstNode.back;
//       this.size--;
//       if (this.size === 0) {
//         this.last = null;
//       }
//       return firstNode;
//     }
//   }

//   push(value, index) {
//     let newNode = new Node(value, index);

//     if (this.size === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       newNode.front = this.last;
//       this.last.back = newNode;
//       this.last = newNode;
//     }
//     this.size++;
//   }

//   pop() {
//     if (this.size === 0) return -1;
//     else {
//       let lastNode = this.last;
//       this.last = lastNode.front;
//       this.size--;
//       if (this.size === 0) {
//         this.first = null;
//       }
//       return lastNode;
//     }
//   }
// }

// const deck = new Deck();

// input.split(' ').forEach((v, i) => {
//   deck.push(+v, i + 1);
// });

// // let now = deck.first;
// // while (deck.size--) {
// //   console.log(now.value);
// //   now = now.back;
// // }

// // 덱을 사용해서 순서를 돌리자!!!!

// const answer = [];
// while (deck.size !== 0) {
//   let ballon = deck.deQueue();
//   answer.push(ballon.index);
//   let moveNum = ballon.value;
//   if (moveNum === undefined) break;
//   if (moveNum > 0) moveNum--;

//   while (moveNum !== 0) {
//     if (moveNum > 0) {
//       let firstNode = deck.deQueue();
//       deck.push(firstNode.value, firstNode.index);
//       moveNum--;
//     } else {
//       let lastNode = deck.pop();
//       deck.enQueue(lastNode.value, lastNode.index);
//       moveNum++;
//     }
//   }
// }

// console.log(answer.join(' '));
