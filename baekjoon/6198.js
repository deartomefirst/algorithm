const [num, ...input] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);

// 건물의 갯수

let stack = [input[0]];
let result = 0;

for (let i = 1; i < num; i++) {
  if (stack[stack.length - 1] > input[i]) {
    stack.push(input[i]);
  } else {
    while (stack.length !== 0 && stack[stack.length - 1] <= input[i]) {
      result += stack.length - 1;
      stack.pop();
    }
    stack.push(input[i]);
  }
  console.log(stack, result);
}

while (stack.length !== 0) {
  result += stack.length - 1;
  stack.pop();
}
console.log(result);

// for (let i = 1; i < num; i++) {
//   stack.push(input[i]);
//   console.log('start', stack);
//   while (stack.length > 0 && stack[stack.length - 1] < input[i + 1]) {
//     stack.pop();
//     result++;
//   }
//   console.log('finish', stack, result);
// }
// console.log(result + stack.length);
/*

10 - 0
10 3 - 0
10 7 - 1
10 7 4 - 0
12 - 2 + 1
12 2 - 1


옥상 정원 꾸미기...

stack에 무엇을 쌓을 것인가 -> stack에서 얻을 수 잇는 정보를 어떻게 관리할 것인가?

결과 0

[10] 
[10, 3] 
[10, 7] -> 결과에 1추가
[10, 7, 4]
[12] -> 결과에 3추가
[12 2]에서 [12]로 바꾸고 결과에 1추가
끝


6
10
3
7
4
12
2




*/
