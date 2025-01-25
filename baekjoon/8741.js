const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const num = BigInt(require('fs').readFileSync(filePath, 'utf-8').trim());

console.log((((2n ** num - 1n) * 2n ** num) / 2n).toString(2));

//  8이면 어떻게 하나..
