/*

카잉 달력

10 12

3 9

계산을 해보자...

year = 1;

60


중국인의 나머지 정리
정수론
-> 이 두 개를 활용해서 문제를 계산을 간단하게 만들 수 있다.
*/

const fs = require('fs');
const [num, ...arr] = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
let counter = 0;
function gcd(a, b) {
  let larger = Math.max(a, b);
  let smaller = Math.min(a, b);
  let remainder;
  while (smaller) {
    counter++;
    remainder = larger % smaller;
    larger = smaller;
    smaller = remainder;
  }
  return larger;
}

for (let i = 0; i < num; i++) {
  let [m, n, x, y] = arr[i].split(' ').map((v) => +v);
  const lcm = (m * n) / gcd(m, n);
  let year;
  if (x >= Math.floor(m / 2)) {
    year = lcm;
    while (year > 0) {
      counter++;
      if ((year - x) % m === 0 && (year - y) % n === 0) {
        console.log(year);
        break;
      }
      year--;
    }
    if (year === 0) console.log(-1);
  } else {
    year = 1;
    while (year <= lcm) {
      counter++;
      if ((year - x) % m === 0 && (year - y) % n === 0) {
        console.log(year);
        break;
      }
      year++;
    }
    if (year > lcm) console.log(-1);
  }
}

console.log(counter);
/*
10 12 3 9

3 + 10i
x 합동 3 (mod 10)
x 합동 9 (mod 12)

9 + 12j

7과 3의 배수

중국인의 나머지 정리
을 정리하기 전에
최대 공약수, 최소 공약수

gcd
a = 공약수 * 소수
b = 공약수 * 소수

수학을 사용할 때 즐겨 사용되는 개념들 정리하자.

유클리드 호제법 -> 최대공약수를 구하는 일상적인 문제를 해결하기 위해 생겨남
나머지의 정리
gcd
lcd

gcd()
function gcd(a,b) {
  let larger = Math.max(a,b);
  let smaller = Math.min(a,b);
  if ( larger % smaller === 0 ) return smaller;
  return gcd(smaller, larger%smaller);
}



*/
