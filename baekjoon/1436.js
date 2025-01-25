/*
시간 제한: 2초
메모리 제한: 128MB

666
1666
2666
...
5666
6661
...
10666
11666
...
16661

*/
let input = +require('fs').readFileSync('input.txt', 'utf-8').trim();

let num = 665;
while (input) {
  num++;
  if (num.toString().includes('666')) {
    input--;
  }
}
console.log(num);

/*

숫자를 쪼개서 구성하는 방식이 더 빠를껄?

-> 구현해보기
*/
