/*

팰린드롬 수
*/
const arr = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim());

let result = '';
let isPalindrome = true;
for (let i = 0; i < arr.length; i++) {
  isPalindrome = true;
  if (arr[i] === '0') break;
  console.log(arr[i]);
  for (let j = 0; j < parseInt(arr[i].length / 2); j++) {
    if (arr[i][j] !== arr[i][arr[i].length - 1 - j]) {
      isPalindrome = false;
      break;
    }
  }
  result += isPalindrome ? 'yes\n' : 'no\n';
}
console.log(result.trim());
