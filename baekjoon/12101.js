/*

1 1 1 1
1 1 2
1 2 1
1 3

1 2 3으로 쪼개서



*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map((v) => +v);

function backtracking() {
  let data = [];
  let count = 0;
  let current = 0;
  function traverse(sum, count) {
    if (n - sum === 1) {
      if (count === k) {
        data.push(1);
        return data;
      } else {
        data.pop();
        sum 
      }
      
      count++;
      if (count === k) return data;
    } else if (n - sum === 2) {
      data.push(2);
      count++;
      if (count === k) return data;
    } else if (n - sum === 3) {
      data.push(3);
      count++;
      if (count === k) return data;
    } else {
      if (count > k) return -1;
      if (sum + 1 < n) traverse(sum + 1, count + 1);
      if (sum + 2 < n) traverse(sum + 2, count + 1);
      if (sum + 3 < n) traverse(sum + 3, count + 1);
    }
  }
  traverse(0, 0);
}

console.log(n, k);
