const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = +require('fs').readFileSync(filePath, 'utf-8').trim();

if (input % 2 === 0) {
  console.log('Duck');
} else {
  console.log('Goose');
}
