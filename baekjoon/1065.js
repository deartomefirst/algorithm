const num = +require('fs').readFileSync('input.txt', 'utf-8').trim();

let result = 0;

for (let i = 1; i <= num; i++) {
  // 한자리 수
  if (i < 100) {
    result += 1;
  } else {
    const numArr = [...i.toString()];
    const diff = numArr[0] - numArr[1];
    let isSame = true;
    for (let j = 1; j < numArr.length - 1; j++) {
      if (numArr[j] - numArr[j + 1] !== diff) {
        isSame = false;
        break;
      }
    }
    if (isSame) {
      result += 1;
    }
  }
}

console.log(result);
/*

각자리의 차이가 일정하지 않으면 break 후에 result에 값을 추가하지 않는다.

차이가 계속 같은 지 알아보는 방법에는....

*/
