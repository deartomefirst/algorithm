const fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('input.txt').toString().split('\n');
const [num, ...sentences] = input;

for (let i = 0; i < num; i++) {
  console.log(
    sentences[i]
      .split(' ')
      .map((v) => v.split('').reverse().join(''))
      .join(' ')
  );
}
