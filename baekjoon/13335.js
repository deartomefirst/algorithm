const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [n, w, L] = input[0].split(' ').map((v) => +v);
const arr = input[1].split(' ').map((v) => +v);

/*
먼저 들어간 게 먼저 나온다.
queue!

L은 최대 몇대가 들어갈 수 있는지도 결정한다.
w와 L을 고려해서 트럭을 다리위에 올리자.
*/
let bridge = Array(w).fill(0);
let time = 0;

while (bridge.length) {
  time += 1;
  bridge.shift();
  if (arr.length > 0) {
    const currentWeight = bridge.reduce((a, b) => a + b, 0);
    if (currentWeight + arr[0] <= L) {
      bridge.push(arr.shift());
    } else {
      bridge.push(0);
    }
  }
}
console.log(time);

/*

queue는 다리

만약에 다리가 비어있다면
queue[n-1] = 들어올 차량의 무게
아니라면
queue안에 있는 배열의 인덱스를 앞으로 한칸씩 땡긴다






[[7,1]]


sum
다리위
[queue]
sum = 7
[7]

sum = 11 -> 10보다 크네?
[7 4] -> 3초 추가 
[4]가

[4,5]

1초
7
2초
7 4
3

queue
[0,7]

4가 들어오려면
queue의 합 + 4가 10 이하

*/
