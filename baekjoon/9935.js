const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [str, bomb] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
  if (str[i] === bomb[bomb.length - 1]) {
    if (stack.length < bomb.length) continue;
    let temp = [];
    for (let j = stack.length - bomb.length; j < stack.length; j++) {
      temp.push(stack[j]);
    }
    if (temp.join('') === bomb) {
      let num = bomb.length;
      while (num--) {
        stack.pop();
      }
    }
  }
}
console.log(stack.length === 0 ? 'FRULA' : stack.join(''));

/*

어떻게 해야... 최적의 조건으로 검색하고 bomb를 터트릴까?

C4가 있으면 터진다.


mirkovC4
[4]


nizCC44

12ab112ab2ab

b랑 b가 만나면 출력된다.


값이 같은 것을 확인할 때는 뒤부터 앞으로 읽어도 된다.


스택은 FILO

[mirkovniz] 
[]
mirkovnizc
mirkovc4


*/
