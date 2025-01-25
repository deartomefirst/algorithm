const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [fx, gx] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let px = [
  fx[0] * Math.pow(gx[0], 2),
  2 * fx[0] * gx[0] * gx[1] + fx[1] * gx[0],
  fx[0] * Math.pow(gx[1], 2) + fx[1] * gx[1] + fx[2],
];

let qx = [fx[0] * gx[0], gx[0] * fx[1], fx[2] * gx[0] + gx[1]];

let pxMinusQx = [px[0] - qx[0], px[1] - qx[1], px[2] - qx[2]];
let discriminant = Math.pow(pxMinusQx[1], 2) - 4 * pxMinusQx[0] * pxMinusQx[2];

console.log(px, qx, pxMinusQx, discriminant);

if (pxMinusQx[0] === 0 && pxMinusQx[1] === 0 && pxMinusQx[2] === 0) {
  console.log('Nice');
} else if (pxMinusQx[0] === 0 && pxMinusQx[1] === 0) {
  console.log('Head on');
} else if (discriminant > 0) {
  console.log('Go ahead');
} else if (discriminant < 0) {
  console.log('Head on');
} else {
  console.log('Remember my character');
}

// 이차식이 해가 없는 경우
// a1 = a2
