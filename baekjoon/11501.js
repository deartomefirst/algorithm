const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
const testCase = input[0];
const arr = input[2]
  .trim()
  .split(' ')
  .map((v) => +v);
console.log(arr);
let stockValues = {};
for (let i = 0; i < arr.length; i++) {
  if (stockValues[arr[i]] === undefined) {
    stockValues[arr[i]] = [i];
  } else {
    stockValues[arr[i]].push(i);
  }
}
const stockPrice = Object.keys(stockValues).sort((a, b) => b - a);
for (let i = 0; i < stockPrice.length; i++) {
  console.log(stockPrice[i]);

  while (stockValues[stockPrice[i].length]) {}
}
