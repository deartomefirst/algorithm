const [...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

let result = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

for (let i = 0; i < arr.length; i++) {
  let [start, finish] = arr[i].split(' ');
  if (start === finish) continue;
  let swapFirst = start - 1;
  let swapLast = finish - 1;
  while (swapFirst < swapLast) {
    swap(result, swapFirst, swapLast);
    swapFirst++;
    swapLast--;
  }
}
console.log(result.join(' '));


/*

비구조화 할당
[
  ...arr.slice(0,start),
  ...arr.slice(start,end).reverse(),
  ...arr.slice(end)
]



*/
