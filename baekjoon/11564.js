const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [k, a, b] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map((v) => BigInt(v));

let chocolate = 0n;
if (a < 0n && b > 0n) {
  chocolate += b / k;
  chocolate += (-1n * a) / k;
  chocolate += 1n;
} else {
  if (a >= 0n) {
    chocolate += b / k;
    console.log(chocolate, 'b만');
    chocolate -= a / k;
    console.log(chocolate, 'a빼고');
    if (a % k === 0n) chocolate += 1n;
  } else if (b <= 0n) {
    chocolate += (-1n * a) / k;
    chocolate -= (-1n * b) / k;
    if ((-1n * b) % k === 0n) chocolate += 1n;
  }
}
console.log(chocolate.toString());

// if (a === 0n && b === 0n) {
//   chocolate += 1n;
// } else if (a === 0n) {
//   chocolate += 1n;
//   chocolate += b / k;
// } else if (b === 0n) {
//   chocolate += 1n;
//   chocolate += (-1n * a) / k;
// } else if (a > 0n) {
//   chocolate += b / k;
//   chocolate -= a / k;
//   if (b % k === 0 && b === a) {
//     chocolate += 1n;
//   }
// } else if (b < 0n) {
//   chocolate += (-1n * a) / k;
//   chocolate -= (-1n * b) / k;
//   if ((-1n * a) % k === 0 && b === a) {
//     chocolate += 1n;
//   }
// } else if (a * b < 0n) {
//   chocolate += 1n;
//   chocolate += b / k;
//   chocolate += (-1n * a) / k;
// }
// console.log(chocolate.toString());

/*



const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [k, a, b] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map((v) => BigInt(v));

let chocolate = 0n;

if (a === 0n && b === 0n) {
  chocolate += 1n;
} else if (a === 0n) {
  chocolate += b / k;
  if (b % k >= 0n) {
    chocolate += 1n;
  }
} else if (b === 0n) {
  chocolate += (-1n * a) / k;
  if ((-1n * a) % k >= 0n) {
    chocolate += 1n;
  }
} else if (a > 0n) {
  chocolate += b / k;
  chocolate -= a / k;
  if (b % k >= 0n) {
    chocolate += 1n;
  }
} else if (b < 0n) {
  chocolate += (-1n * a) / k;
  chocolate -= (-1n * b) / k;
  if ((-1n * a) % k >= 0n) {
    chocolate += 1n;
  }
} else if (a * b < 0n) {
  chocolate = 1n;
  chocolate += b / k;
  chocolate += (-1n * a) / k;
}

console.log(chocolate.toString());

1 234 21 22 23 31 32 33 41 42 43


0인 경우

둘 중 하나가 0인 경우

양 음
b까지의 개수 12 / 1 = 12

양 양
b까지의 개수 12 / 1 = 12개

a까지의 개수 2 / 1 = 2개

음 음
a까지의 개수 

*/
