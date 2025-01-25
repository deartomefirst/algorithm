const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

// 비내림차순
const criteria = new Map();
let criteriaArr = [];
for (let i = 1; i <= n; i++) {
  let [title, score] = input[i].split(' ');
  score = +score;
  if (criteria.has(score)) continue;
  criteria.set(score, title);
  criteriaArr.push(score);
}

const answer = [];

// for (let i = n + 1; i <= n + m; i++) {
//   let fightScore = +input[i];
//   const iterator = criteria.keys();
//   let criteriaValue = iterator.next().value;
//   if (fightScore > criteriaValue) {
//     while (criteriaValue < fightScore) {
//       criteriaValue = iterator.next().value;
//     }
//   }
//   answer.push(criteria.get(criteriaValue));
// }

for (let i = n + 1; i <= n + m; i++) {
  let fightScore = +input[i];

  let s = 0;
  let f = criteriaArr.length - 1;

  if (fightScore <= criteriaArr[s]) {
    answer.push(criteria.get(criteriaArr[s]));
  } else {
    while (s <= f) {
      let mid = Math.floor((s + f) / 2);
      if (fightScore <= criteriaArr[mid]) {
        f = mid - 1;
      } else if (fightScore > criteriaArr[mid]) {
        s = mid + 1;
      }
    }
    answer.push(criteria.get(criteriaArr[f + 1]));
  }

  // const iterator = criteria.keys();
  // let criteriaValue = iterator.next().value;
  // if (fightScore > criteriaValue) {
  //   while (criteriaValue < fightScore) {
  //     criteriaValue = iterator.next().value;
  //   }
  // }
  // answer.push(criteria.get(criteriaValue));
}

console.log(answer.join('\n'));

/*
전투력을 출력할 수 있는 경우는 값의 크기가 바뀔 수 있다.

iterator로 해결하려고 했으나

정렬되어 있는 배열에서 값이 어디에 위치하고 있는지 찾는 문제여서
이분탐색을 사용하지 않으면 시간초과가 발생한다.



*/
