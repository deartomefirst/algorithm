const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [E, S, M] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

let year = 1;
while (true) {
  if (year % 15) {
  }
  year++;
}
console.log(year);
/*





*/
