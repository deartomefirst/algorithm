// 스택수열
/*

4 3 6 8 7 5 2 1

push는 +로
pop은 -로

1, 2, 3, 4
1, 2, 3
1, 2, 5
1, 2, 5, 6

const [num, arr] = fs.readFileSync('input.txt').toString().split('\n');
idx = 1;
stack = [];
result = [];
while ( stack.length !== num ) {
  if (arr[idx-1] !== idx ) {
    stack.push(idx);
  }
}

해결하지 못했다.


스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자.

pop을 할 때 배열에 있는 수가 나와야 됨

++++
- 4
- 3
++++
- 6
+++
- 8
- 7
-- 5
--- 2
- 1

*/

const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((v) => +v);

/*

stack
1 2 5 7 8


결과
4 3 6 8 7 5 2 1

원본 수열


조건으로 따져서 만들 수 잇는지 없는지 알아내려면...?


12534

count 1

push count++
pop
push count++
pop
push count++ // 3
push count++ // 4
push count++ // 5 , count : 6
pop

끝값이 크거나 작은 걸로 판별하자




*/
