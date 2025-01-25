const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const nums = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const answer = [];
for (let i = 0; i < nums.length - 1; i++) {
  let num = Math.abs(nums[i]);
  let temp = {};
  for (let j = 2; j * j <= Math.abs(nums[i]); j++) {
    while (num % j === 0) {
      temp[j] = temp[j] || 0;
      temp[j]++;
      num /= j;
    }
  }
  let values = Object.values(temp);
  let isSame = true;

  for (let k = 1; k < values.length; k++) {
    if (values[k] !== values[0]) {
      isSame = false;
    }
  }

  if (values.length === 0) {
    answer.push(1);
  } else {
    if (isSame) {
      if (values[0] % 2 === 1) {
        answer.push(values[0]);
      } else {
        if (nums[i] < 0) {
          answer.push(1);
        } else {
          answer.push(values[0]);
        }
      }
    } else {
      answer.push(1);
    }
  }
}
console.log(answer.join('\n'));

/*

소인수분해를 하면 된다.
2부터... 쭉쭉쭉 

왜 안되는지...? 
소인수분해는 잘했다고 생각하는디...


*/
