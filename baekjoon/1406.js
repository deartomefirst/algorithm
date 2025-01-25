const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const [sentence, num, ...cmds] = input;
let left = [...sentence];
let right = [];

for (let i = 0; i < num; i++) {
  const [cmd, str] = cmds[i].split(' ');
  if (cmd === 'L') {
    if (left.length === 0) continue;
    right.push(left.pop());
  } else if (cmd === 'D') {
    if (right.length === 0) continue;
    left.push(right.pop());
  } else if (cmd === 'B') {
    left.pop();
  } else {
    left.push(str);
  }
}
// 가변 배열의 길이를 for문으로 돌릴 때는 주의하자!!!
let rightLength = right.length;
for (let i = 0; i < rightLength; i++) {
  left.push(right.pop());
}
console.log(left.join(''));
// 시간 초과

/*
linkedlist
연결 리스트로 해결하고 싶다.



*/
