const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

const num = +input[0];
const arr = input[1].split(' ').map((v) => +v);


/*

[6 0]
[9 1]

tower = [[10000,0],[6,1]];
[[6,0]]
[[9 0]]
[[9 0] [5 1]]
[[9 0] [6 1]]
result 0 0 

stack []
[6]
결과 [0]

[6 9]
[9]
결과 [0 0]

[9 5]
결과 [0 0 2]

[9 7 5 6]

*/


let stack = [arr[0]];
let indexStack = [0];
let maxIndex = 0;
let result = [0];

for (let i = 1; i < num; i++) {
  // max value보다 큰 경우
  if (arr[i] > arr[maxIndex]) {
    stack = [arr[i]];
    indexStack = [i];
    maxIndex = i;
    result.push(0);
    // max value랑 같은 경우
  } else if (arr[i] === arr[maxIndex]) {
    stack = [arr[i]];
    indexStack = [i];
    result.push(maxIndex + 1);
    maxIndex = i;
  } else {
    // max value 보다 작지만 직전 인덱스의 값보다 큰 경우 ( while로 찾고 )
    stack.push(arr[i]);
    indexStack.push(i);
    if (arr[i] > arr[i - 1]) {
      let j = i - 1;
      while (j >= maxIndex) {
        if (arr[j] > arr[i]) {
          result.push(j + 1);
          break;
        } else {
          j--;
        }
      }
      // max value 보다 작지만 직전 인덱스의 값보다 작거나 같은 경우 ( 전 index로)
    } else if (arr[i] < arr[i - 1]) {
      result.push(i);
    }
  }
}
console.log(result.join(' '));

/*

이게 왜 stack이냐...?
max height = 6
max index = 1;
6 -> 0
9 -> 0

어떤 방식이 최적일까?
6 -> 0
stack -> 레이저를 쏘면 맞을... 근데 새로 들어오는 애가 더 크면 왼쪽에서 쏴도 안맞음

9 
stack에서 찾아봐... 없어
0을 결과에 추가
stack에는 6을 pop
stack에 9를 push

5
stack에서 오른쪽부터 찾아봄... 

6 9 8 7 3

max보다 클 때
stack을 다 비우자.
index 정보도 같이 넣어주자.

인덱스를 저장하는 배열도 함께 만들자.

6 5 4

시간 초과
-> while에서 무조건이지...
stack을 어떻게 사용할지 모르겠다...

*/
