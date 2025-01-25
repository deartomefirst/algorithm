const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, m, t] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

// function solution(n, m, t) {
//   const large = Math.max(n, m);
//   const small = Math.min(n, m);
//   let rest = t % small; // 초기 남은 시간 계산
//   if (rest === 0) return [t / small, 0]; // 남은 시간이 없으면 바로 반환
//   let smallNum = Math.floor(t / small);
//   let largeNum = 0;
//   let minRest = rest;
//   let maxHamburger = smallNum;

//   while (smallNum >= 0) {
//     rest = t - (smallNum * small + largeNum * large); // 남은 시간 계산
//     if (rest < 0) break; // 남은 시간이 음수가 되면 종료
//     if (rest < minRest) {
//       minRest = rest;
//       maxHamburger = largeNum + smallNum;
//     } else if (rest === minRest) {
//       maxHamburger = Math.max(maxHamburger, largeNum + smallNum);
//     }
//     largeNum++;
//     smallNum = Math.floor((t - large * largeNum) / small); // smallNum 재계산
//   }
//   return [maxHamburger, minRest];
// }
// function solution(n, m, t) {
//   const large = Math.max(n, m);
//   const small = Math.min(n, m);
//   let rest = t % small;
//   if (rest === 0) return [t / small, 0];
//   let smallNum = Math.floor(t / small);
//   let largeNum = 0;
//   let minRest = rest;
//   let maxHamburger = smallNum;

//   while (smallNum > 0) {
//     if (rest < minRest) {
//       minRest = rest;
//       maxHamburger =
//         maxHamburger < largeNum + smallNum ? largeNum + smallNum : maxHamburger;
//     } else if (rest === minRest) {
//       maxHamburger =
//         maxHamburger < largeNum + smallNum ? largeNum + smallNum : maxHamburger;
//     }
//     if (rest === 0) return [maxHamburger, 0];
//     largeNum++;
//     rest = (t - large * largeNum) % small;
//     smallNum = Math.floor((t - large * largeNum) / small);
//   }
//   return [maxHamburger, minRest];
// }
function solution(n, m, t) {
  let maxCount = 0;
  let minColaTime = t;

  for (let i = 0; i * n <= t; i++) {
    let remainingTime = t - i * n;
    if (remainingTime < 0) continue;
    let j = Math.floor(remainingTime / m);
    let colaTime = remainingTime - j * m;

    let totalBurgers = i + j;

    if (
      colaTime < minColaTime ||
      (colaTime === minColaTime && totalBurgers > maxCount)
    ) {
      maxCount = totalBurgers;
      minColaTime = colaTime;
    }
  }

  console.log(maxCount, minColaTime);
}

const [burgers, cola] = solution(n, m, t);
console.log(burgers, cola);
