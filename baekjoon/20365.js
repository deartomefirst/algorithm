const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
const N = Number(input[0]);

function paintProblem(str) {
  const first = str[0];

  // 처음에 major색상으로 색칠
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== first && str[i] !== str[i - 1]) count++;
  }
  return count;
}

console.log(paintProblem(input[1]));

/*

BBRBRBBR



*/
