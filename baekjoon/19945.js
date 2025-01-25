const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = +require('fs').readFileSync(filePath, 'utf-8').trim();

if (input === 0) {
  console.log(1);
} else {
  let binaryString;
  if (input < 0) {
    binaryString = (input >>> 0).toString(2);
  } else {
    binaryString = input.toString(2);
  }
  console.log(binaryString.replace(/^0+/, '').length);
}
