const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
const [N, C] = input[0]
  .trim()
  .split(' ')
  .map((v) => +v);
const arr = input[1].split(' ').map((v) => +v);
const frequency = {};
let count = 0;
for (let i = 0; i < N; i++) {
  if (frequency[arr[i]] === undefined) {
    frequency[arr[i]] = [1, count++];
  } else {
    frequency[arr[i]] = [++frequency[arr[i]][0], frequency[arr[i]][1]];
  }
}
let frequencySort = Object.keys(frequency).sort((a, b) => {
  if (frequency[a][0] === frequency[b][0]) {
    return frequency[a][1] - frequency[b][1]; // key 값이 작은 순서대로 정렬
  } else {
    return frequency[b][0] - frequency[a][0]; // value 값이 큰 순서대로 정렬
  }
});
let result = [];
for (let i = 0; i < frequencySort.length; i++) {
  for (let j = 0; j < frequency[frequencySort[i]][0]; j++) {
    result.push(frequencySort[i]);
  }
}

console.log(result.join(' '));
