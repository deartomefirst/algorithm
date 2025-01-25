const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const K = Number(require('fs').readFileSync(filePath, 'utf-8').trim());

let now = 1;
let num = 1;
const prime = [];
while (now !== K) {
  let i = 0;
  let isPrime = true;
  num += 2;
  while (prime[i] * prime[i] <= num && i < prime.length) {
    // 제곱근으로 나눠지면 소수가 아니다.
    if (num % prime[i] === 0) {
      isPrime = false;
      break;
      // 제곱근으로 나눠지지 않는다면
    } else {
      i++;
    }
  }
  if (isPrime) {
    prime.push(num);
    now++;
  }
}
console.log(num);

// 에라토스테네스의 체를 사용해서
// 50만까지 어떻게 커버되는지 확신할 수 있을까?
// 500000
// 10000000
// num * 15 + 1
// 500000 * 30
// 등등 다양한 수가 한계로 지정되어 있다. 어떤 것이 올바른 것일까?
