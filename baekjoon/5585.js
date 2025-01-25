const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +require('fs').readFileSync(filePath, 'utf-8').trim();

// 500엔, 100엔, 50엔, 10엔, 5엔, 1
// 999 1 4 1 4 1 4
// 850 1 3 1

let change = 1000 - n;
let coins = 0;

while (change > 0) {
  console.log(change);
  if (change / 500 > 1) {
    coins += Math.floor(change / 500);
    change %= 500;
  } else if (change / 100 >= 1) {
    coins += Math.floor(change / 100);
    change %= 100;
  } else if (change / 50 >= 1) {
    coins += Math.floor(change / 50);
    change %= 50;
  } else if (change / 10 >= 1) {
    coins += Math.floor(change / 10);
    change %= 10;
  } else if (change / 5 >= 1) {
    coins += Math.floor(change / 5);
    change %= 5;
  } else {
    coins += change;
    change -= change;
  }
}

console.log(coins);
