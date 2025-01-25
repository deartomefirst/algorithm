const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let num = +require('fs').readFileSync(filePath, 'utf-8').trim();
let result = [];
for (let i = 2; i <= Math.sqrt(num); i++) {
  while (num % i === 0) {
    num = num / i;
    result.push(i);
  }
}
if (num !== 1) result.push(num);
console.log(result.join('\n'));

// Math.sqrt(num)보다 작은 숫자들 중에서 소수를 구하면 속도가 더 빠르지 않을까? -> 번거로운 느낌이 있기도 함
