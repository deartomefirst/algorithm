const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const num = +require('fs').readFileSync(filePath, 'utf-8').trim();

function makePrimeArr(num) {
  const nums = Array(num + 1).fill(false);
  for (let i = 2; i * i <= num; i++) {
    if (nums[i] === false) {
      for (let j = 2 * i; j <= num; j += i) {
        nums[j] = true;
      }
    }
  }

  return nums
    .reduce((prev, v, idx) => {
      if (v === false) {
        prev.push(idx);
      }
      return prev;
    }, [])
    .slice(2);
}

function countPrimeSum(n) {
  let count = 0;
  if (n === 1) return 0;
  if (n <= 3) return 1;
  const prime = makePrimeArr(n);
  let start = 0;
  let finish = 1;
  let sum = prime[start] + prime[finish];
  while (start < finish && finish !== prime.length - 1) {
    if (sum === n) {
      count++;
      finish++;
      sum += prime[finish];
      sum -= prime[start];
      start++;
    } else if (sum < n) {
      finish++;
      sum += prime[finish];
    } else {
      sum -= prime[start];
      start++;
    }
  }
  if (prime.at(-1) === n) count++;
  return count;
}

console.log(countPrimeSum(num));
