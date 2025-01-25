const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const num = +require('fs').readFileSync(filePath, 'utf-8').trim();

let result = [];
let arr1 = new Array(num).fill(' ');
let arr2 = new Array(num).fill(' ');
for (let i = 0; i < num; i++) {
  if (i % 2 === 0) {
    arr1[i] = '*';
  } else {
    arr2[i] = '*';
  }
}

for (let i = 0; i < num * 2; i++) {
  if (i % 2 === 0) {
    result.push(arr1.join(''));
  } else {
    result.push(arr2.join(''));
  }
}

console.log(result.join('\n').trim());
