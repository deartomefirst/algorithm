const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, info, monitor] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map(Number);
const infoArr = info.split(' ').map(Number);
const monitorArr = monitor.split(' ').map(Number);
const arr = infoArr.concat(monitorArr);
const result = [];
const temp = [];

function backtrack(start) {
  if (temp.length === N) {
    result.push([...temp]);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    temp.push(i);
    backtrack(i);
    temp.pop();
  }
}
backtrack(0);
let count = 0;

for (let i = 0; i < result.length; i++) {
  let sum = 0;
  let indexArr = result[i];
  for (let j = 0; j < indexArr.length; j++) {
    // 이전 인덱스의 값과 같다면 sum에 더할 때 반으로 줄여서 더하자

    if (j !== 0 && indexArr[j] % 3 === indexArr[j - 1] % 3) {
      sum += arr[indexArr[j]] / 2;
    } else {
      sum += arr[indexArr[j]];
    }
  }
  if (sum >= M) count++;
}

console.log(count);

/*






진척도는 짝수다 -> 반 나눌 때 신경쓰지 않아도 된다.

일을 하는 날 [ ]
[   ]


function generateCombinations(arr, N) {
    const results = [];
    const tempArray = [];

    function backtrack(start) {
        if (tempArray.length === N) {
            results.push([...tempArray]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            tempArray.push(arr[i]);
            backtrack(i);  // 중복 선택이 가능하므로 i를 다시 넘겨줍니다.
            tempArray.pop();
        }
    }

    backtrack(0);
    return results;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6];
const N = 3;
const combinations = generateCombinations(arr, N);
combinations.forEach(combination => console.log(combination.join(' ')));


*/
