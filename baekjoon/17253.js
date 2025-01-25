const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = BigInt(require('fs').readFileSync(filePath, 'utf-8').trim());

function isSamSam(num) {
  if (num === 0n) return 'NO';

  let powersOfThree = [];
  let power = 1n;

  while (power <= num) {
    powersOfThree.push(power);
    power *= 3n;
  }

  for (let i = powersOfThree.length - 1; i >= 0; i--) {
    if (num >= powersOfThree[i]) {
      num -= powersOfThree[i];
      if (num === 0n) break;
    }
  }
  return num === 0 ? 'YES' : 'NO';
}
// console.log(isSamSam(input));
// 84% 쯤에서 실패...

// function isSamSam(num) {
//   if (num === 0n) return 'NO';
//   let ternary = num.toString(3);
//   return ternary.includes('2') ? 'NO' : 'YES';
// }

console.log(isSamSam(input));
/*

삼삼한 수 2


3의 거듭 제곱으로 만들 수 있는 수면 삼삼한 수다.

1 0
3 1
4 1 0
9 2
10 2 0
12 2 1
13 2 1 0


1
3  4
9  13
27 40
81 121
243 364
729

109-1
108


*/
