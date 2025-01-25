const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = +require('fs').readFileSync(filePath, 'utf-8').trim();

let count = 0;

for (let i = 2; i <= input / 2; i++) {
  for (let j = i; j <= input / 2; j++) {
    if (i * j <= input) count++;
  }
}

console.log(count + input);

// 약수의 개수 12 1 2 3 4 6 12
// 약수의 개수를 구하고 곱하면 된다.
// 소인수 분해하고

/*
6
3


직사각형을 만들 수 있는 

1 -> 1개
2 -> 2개
3 -> 3개
4 -> 5개
5 -> 6개
6 -> 8개
7 -> 9
8 -> 11

12

9의 경우

22
23
24
33



*/
