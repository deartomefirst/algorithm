const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = +require('fs').readFileSync(filePath, 'utf-8').trim();
let answer = 1;
for (let i = 1; i <= N; i++) {
  if (i % 2 === 1) {
    answer *= i;
  }
}
console.log(answer);

/*




6명

4c2 2c2 



6C2 4C2 2C2

15 * 6
3!

a b c d e f

ab cd ef
ac bd ef
ad bc ef

15 
*/
