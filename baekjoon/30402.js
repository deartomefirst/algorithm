const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let isFounded = false;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'w') {
      console.log('chunbae');
      isFounded = true;
      break;
    } else if (input[i][j] === 'b') {
      console.log('nabi');
      isFounded = true;
      break;
    } else if (input[i][j] === 'g') {
      console.log('yeongcheol');
      isFounded = true;
      break;
    }
  }
  if (isFounded) break;
}
