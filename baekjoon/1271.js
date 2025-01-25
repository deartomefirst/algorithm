const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [money, person] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(BigInt);
console.log((money / person).toString());
console.log((money - (money / person) * person).toString());
