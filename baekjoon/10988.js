const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const str = require('fs').readFileSync(filePath, 'utf-8').trim();

let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome ? 1 : 0);

// 6이면 3, 7이어도 3
