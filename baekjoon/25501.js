const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let answer = [];

for (let i = 0; i < +T; i++) {
  answer.push(isPalindrome(arr[i]));
}

function recursion(str, l, r, count) {
  if (l >= r) return [1, count];
  else if (str[l] !== str[r]) return [0, count];
  else return recursion(str, l + 1, r - 1, count + 1);
}

function isPalindrome(str) {
  return recursion(str, 0, str.length - 1, 1);
}

console.log(answer.map((v) => v.join(' ')).join('\n'));
