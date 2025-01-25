const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' '));

const numArr = input.flat();
const n = +numArr.shift();

console.log(
  numArr
    .filter((v) => v !== '')
    .map((v) => {
      v = v.trim().split('').reverse().join('');
      return +v;
    })
    .sort((a, b) => a - b)
    .join('\n')
);

// function reverseAndSort(input) {
//   const numbers = input.split(' ').map(Number);
//   const reversed = numbers.map((num) =>
//     parseInt(String(num).split('').reverse().join(''))
//   );
//   console.log(reversed);
//   reversed.sort((a, b) => a - b);

//   const result = reversed.map((num) =>
//     parseInt(String(num).split('').reverse().join(''))
//   );
//   return result;
// }
// resverseAndSort();
