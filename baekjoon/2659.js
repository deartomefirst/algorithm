const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim();

function calculateClockNum(nums) {
  let arr = nums.split(' ').map(Number);
  const rotations = [
    arr.join(''),
    `${arr[1]}${arr[2]}${arr[3]}${arr[0]}`,
    `${arr[2]}${arr[3]}${arr[0]}${arr[1]}`,
    `${arr[3]}${arr[0]}${arr[1]}${arr[2]}`,
  ];

  return Math.min(...rotations.map(Number));
}

function findRank(clockNum) {
  let rank = 0;
  let set = new Set();
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let l = 1; l <= 9; l++) {
          const tempCards = [i, j, k, l];
          const calClockNum = calculateClockNum(tempCards.join(' '));
          if (set.has(calClockNum)) continue;
          set.add(calClockNum);
          rank += 1;
          if (calClockNum === clockNum) return rank;
        }
      }
    }
  }
}
console.log(calculateClockNum(input));
console.log(findRank(calculateClockNum(input)));

// let clockNums = [];
// let arr = [...input];
// for (let i = 0; i < 4; i++) {
//   clockNums.push(+arr.join(''));
//   let first = arr.shift();
//   arr.push(first);
// }
// const clockNum = Math.min(...clockNums);

// // 몇번째로 작은 시계수인지 계산하는 방법

// // 4자리 수를 만드는 중복순열인데 앞의 인덱스 숫자보다는 같거나 커야한다.

// function getPermutationOrder(num) {
//   let order = 0;
//   let isSame = false;
//   function backtrack(current) {
//     if (current.length === 4) {
//       order += 1;
//       if (Number(current.join('')) === num) {
//         isSame = true;
//       }
//       return;
//     }

//     for (let i = 1; i <= 9; i++) {
//       if (current.length === 0) {
//         current.push(i);
//         backtrack(current);
//         if (isSame) return order;
//         current.pop();
//       } else {
//         // 현재 current에 들어있는 마지막 원소의 값보다 크거나 같은 경우에만 이어서 숫자가 올 수 있다.
//         if (current.at(-1) <= i) {
//           current.push(i);
//           backtrack(current);
//           if (isSame) return order;
//           current.pop();
//         }
//       }
//     }
//   }

//   return backtrack([]);
// }

// console.log(getPermutationOrder(clockNum));
