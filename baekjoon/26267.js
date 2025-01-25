const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const schedules = input.map((v) => v.split(' ').map(Number));

const maxMoneyAtTime = new Map();
let maxMoney = 0;

for (const [x, t, c] of schedules) {
  let maxAtTime = maxMoneyAtTime.get(x - t) || 0;
  maxAtTime += c;
  maxMoney = Math.max(maxMoney, maxAtTime);
  maxMoneyAtTime.set(x - t, maxAtTime);
}

console.log(maxMoney);

// function maxMoneyRobber(N, banks) {
//   const maxMoneyAtTime = new Map();

//   let maxMoney = 0;

//   for (const [x, t, c] of banks) {
//     let maxAtTime = maxMoneyAtTime.get(t) || 0;
//     maxAtTime += c;
//     maxMoneyAtTime.set(t, Math.max(maxAtTime, maxMoneyAtTime.get(t) || 0));

//     for (let time = t - 1; time >= 0; time--) {
//       if (maxMoneyAtTime.has(time)) {
//         maxMoney = Math.max(maxMoney, maxMoneyAtTime.get(time) + c);
//         break;
//       }
//     }
//     console.log(maxMoneyAtTime);
//   }
//   return maxMoney;
// }

// console.log(maxMoneyRobber(N, banks));
