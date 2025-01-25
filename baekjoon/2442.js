const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = +require('fs').readFileSync(filePath, 'utf-8').trim();

const answer = [];
for (let i = 0; i < N; i++) {
  let str = ' '.repeat(N - i - 1);
  str += '*'.repeat(2 * i + 1);

  answer.push(str);
}
console.log(answer.join('\n'));
/*


어떻게 하면 간단하게 출력할 수 있을까?

for
  for

  for

  for


3

  *  
 *** 
*****
*/
