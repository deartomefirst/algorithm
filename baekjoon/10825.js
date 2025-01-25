const [num, ...arr] = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

for (let i = 0; i < +num; i++) {
  arr[i] = arr[i]
    .trim()
    .split(' ')
    .map((v) => Number(v) || v);
}

function compare(a, b) {
  let [nameA, ...scoreA] = a;
  let [nameB, ...scoreB] = b;
  console.log(nameA, nameB, '비교');
  if (scoreA[0] > scoreB[0]) return -1;
  else if (scoreA[0] < scoreB[0]) {
    return 1;
  } else {
    if (scoreA[1] > scoreB[1]) return 1;
    else if (scoreA[1] < scoreB[1]) return -1;
    else {
      if (scoreA[2] > scoreB[2]) return -1;
      else if (scoreA[2] < scoreB[2]) return 1;
      else {
        if (nameA > nameB) return 1;
        else if (nameA < nameB) return -1;
        else return 0;
      }
    }
  }
}

console.log(
  arr
    .sort(compare)
    .map((v) => v[0])
    .join('\n')
);

/*

여러번 반복해야 할 때, 점수를 부과해서 쉽게 해결할 수도 있다.
localeCompare의 쓰임새와

sort callback 함수의 정확한 이해!!

*/
