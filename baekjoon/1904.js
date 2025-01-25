const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = +require('fs').readFileSync(filePath, 'utf-8').trim();

const memo = [0, 1, 2];

if (input <= 2) {
  console.log(memo[input]);
} else {
  for (let i = 3; i <= input; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
  }
  console.log(memo[input]);
}

/*

1 -> 1
2 -> 2 11 00 
3 -> 3 100 001 111
4 -> 5 1100 1001 1111 
5 -> 11100 11001 10011 00111 10000 00100 00001 11111
6 -> 111111 000000 100001 100100 110000 001001 
     001100 000011 111100 111001 110011 100111 001111

*/
