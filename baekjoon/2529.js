const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [k, signs] = require('fs').readFileSync(filePath).toString().split('\n');

let signArr = signs.split(' ');
