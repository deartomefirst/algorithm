const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, arr] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');
const N = +n;
const raidus = arr.split(' ').map(Number);

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

let answer = [];
for (let i = 1; i < raidus.length; i++) {
  let temp = gcd(raidus[0], raidus[i]);

  answer.push(`${raidus[0] / temp}/${raidus[i] / temp}`);
}
console.log(answer.join('\n'));
/*



*/
