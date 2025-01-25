const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [subin, sister] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map((v) => +v);

// 기록을 남기는
let visited = new Array(101).fill(0);
let queue = [];

function findSister(start, finish) {
  if (start >= finish) return start - finish;
  visited[finish] = 1;
  queue.push(finish);
  let count = 5;
  while (visited[start] === 0) {
    let current = queue.shift();
    let less = current - 1;
    let plus = current + 1;
    let half = Math.floor(current / 2);
    if (current % 2 === 0 && visited[half] === 0) {
      visited[half] = visited[current] + 1;
      queue.push(half);
    }
    if (visited[less] === 0) {
      visited[less] = visited[current] + 1;
      queue.push(less);
    }
    if (visited[plus] === 0) {
      visited[plus] = visited[current] + 1;
      queue.push(plus);
    }
  }

  return visited[start] - 1;
}
console.log(findSister(subin, sister));
/*


Array
array[Math.floor(value/2)]
=> 위같은 연산이 가능한가?

순서를 나타내는 변수를 만들지말고

그전의 값에서 +1 해주는 방식으로!!!



queue []





5


            17
          16   18
       8 15   9  19
    4 7  14  8 10 20
   3 5          11  21


17 16 18 


17을 기준으로 bfs를 실행해보자

3개로 나누고
이미 방문한 적이 있다면 no
아니라면 반복해서 실행하다가
내가 있는 위치를 찾으면 break;

*/
