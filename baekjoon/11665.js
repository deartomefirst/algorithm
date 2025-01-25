const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const n = +input[0];

let largestX = 1;
let largestY = 1;
let largestZ = 1;
let smallestX = 1000;
let smallestY = 1000;
let smallestZ = 1000;

for (let i = 1; i <= n; i++) {
  let [x1, y1, z1, x2, y2, z2] = input[i].split(' ').map(Number);
  largestX = Math.max(largestX, x1);
  largestY = Math.max(largestY, y1);
  largestZ = Math.max(largestZ, z1);
  smallestX = Math.min(smallestX, x2);
  smallestY = Math.min(smallestY, y2);
  smallestZ = Math.min(smallestZ, z2);
}

if (
  smallestX - largestX <= 0 ||
  smallestY - largestY <= 0 ||
  smallestZ - largestZ <= 0
) {
  console.log(0);
} else {
  console.log(
    (smallestX - largestX) * (smallestY - largestY) * (smallestZ - largestZ)
  );
}
