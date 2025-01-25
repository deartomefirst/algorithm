const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [P, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

/*
뒤에 있는 원소들부터 확인하고 확인된 것들은 제외시키자


 
*/
