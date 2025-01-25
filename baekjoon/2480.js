const [first, second, third] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

let reward = 0;
if (first === second && second === third) {
  reward += 10000 + first * 1000;
} else if (first !== second && second !== third && third !== first) {
  reward += Math.max(first, second, third) * 100;
} else {
  // 가장 빈도수가 높은 수
  if (first === second) {
    reward += 1000 + first * 100;
  } else if (second === third) {
    reward += 1000 + second * 100;
  } else {
    reward += 1000 + third * 100;
  }
}
console.log(reward);

/*

first === second || second === third || third === first



*/
