const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = +require('fs').readFileSync(filePath, 'utf-8').trim();

let T = [0, 0, 0];
if (input % 10 !== 0) {
  console.log(-1);
} else {
  let quo = 0;
  quo = Math.floor(input / 300);
  T[0] = quo;
  input -= 300 * quo;
  quo = Math.floor(input / 60);
  T[1] = quo;
  input -= 60 * quo;
  quo = Math.floor(input / 10);
  T[2] = quo;
  input -= 10 * quo;
  console.log(T.join(' '));
}

// 300초 60초 10초
