const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
const cardCount = +input[0].trim();
const cards = input[1]
  .trim()
  .split(' ')
  .map((v) => +v);
const checkCount = +input[2].trim();
const checkNum = input[3]
  .trim()
  .split(' ')
  .map((v) => +v);

let cardsCounter = {};
for (let i = 0; i < cardCount; i++) {
  cardsCounter[cards[i]] = ++cardsCounter[cards[i]] || 1;
}
let result = [];
for (let i = 0; i < checkCount; i++) {
  result.push(cardsCounter[checkNum[i]] || 0);
}
console.log(result.join(' '));

/*


-10 -10 2 3 3 6 7 10 10 10

*/
