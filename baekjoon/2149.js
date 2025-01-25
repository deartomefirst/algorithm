const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [key, input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const cryptogram = [];

// 바꾸기 쉽게 row에 column을 넣자
for (let i = 0; i < key.length; i++) {
  let row = [];
  for (let j = 0; j < key.length; j++) {
    row.push(input[i * (input.length / key.length) + j]);
  }
  cryptogram.push(row);
}
console.log(cryptogram);
console.log(key);
console.log([...key].map((v, i) => [v, i]));
let newArrOrder = [...key]
  .map((v, i) => [v, i])
  .sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });
console.log(newArrOrder);
let result = Array.from({ length: input.length / key.length }, () => []);
for (let i = 0; i < key.length; i++) {
  result[newArrOrder[i][1]] = cryptogram[i];
}
console.log(result);
/*

암호화

평문 -> 암호문


주어진 상황

암호문 -> 평문

*/
