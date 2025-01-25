const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [plain, cipher] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let cipherArr = [];
for (let i = 0; i < plain.length; i++) {
  let diff = cipher[i].charCodeAt(0) - plain[i].charCodeAt(0);
  if (diff > 0) {
    cipherArr.push(String.fromCharCode(64 + diff));
  } else {
    cipherArr.push(String.fromCharCode(90 + diff));
  }
}
// 배열의 반복되는 패턴 중에서 가장 길이가 작은 것을 찾아라.
// function findShortestPattern(arr) {
//   for (let len = 1; len <= arr.length / 2; len++) {
//     const pattern = arr.slice(0, len);
//     let valid = true;

//     for (let i = len; i < arr.length; i++) {
//       if (arr[i] !== pattern[i % len]) {
//         valid = false;
//         break;
//       }
//     }
//     if (valid) {
//       return pattern.join('');
//     }
//   }
//   return [];
// }

function findShortestPattern(arr) {
  const n = arr.length;

  // Knuth-Morris-Pratt (KMP) 알고리즘을 사용하여 패턴을 찾는 방법
  const lps = Array(n).fill(0);
  let len = 0; // 이전 LPS 길이
  let i = 1;

  // LPS 배열 생성
  while (i < n) {
    if (arr[i] === arr[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1]; // 이전 LPS로 되돌아감
      } else {
        lps[i] = 0;
        i++;
      }
    }
    console.log(lps);
    console.log(i, len);
  }

  // 최단 패턴 길이 계산
  const patternLength = n - lps[n - 1];
  return n % patternLength === 0
    ? arr.slice(0, patternLength).join('')
    : arr.join('');
}

let result = findShortestPattern(cipherArr);
console.log(result.length === 0 ? cipherArr.join('') : result);
