const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  let divisor = [1];
  for (let j = 2; j <= Math.sqrt(input[i]); j++) {
    if (input[i] % j === 0) {
      divisor.push(j);
      divisor.push(input[i] / j);
    }
  }
  if (input[i] === divisor.reduce((acc, v) => acc + v, 0)) {
    console.log(`${input[i]} = ${divisor.sort((a, b) => a - b).join(' + ')}`);
  } else {
    console.log(`${input[i]} is NOT perfect.`);
  }
}
