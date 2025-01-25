const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

let num = parseInt(input[0]);
const arr = input[1].split(' ').map((v) => +v);
const sortArr = [...arr].sort((a, b) => a - b);

const order = {};

let start = 0;
let finish = 0;
let numOrder = 0;

while (num--) {
  if (sortArr[start] === sortArr[finish]) {
    order[sortArr[finish]] = numOrder;
  } else {
    numOrder++;
    order[sortArr[finish]] = numOrder;
    start = finish;
  }
  finish++;
}

const result = arr.map((v) => order[v]);
console.log(result.join(' '));
