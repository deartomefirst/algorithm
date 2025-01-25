/*
대소문자 구분하지 않는다.
빈도수를 체크한다.

출력 -> 대문자

가장 많이 사용된 알파벳이 무엇이냐...?
배열로 빈도수를 체크하기는 좀...

-> 객체를 이용하자

알파벳은 갯수가 한정적이다...
for 문만 돌리면 중복되는 경우를 거르기가 힘들다.

문자열
'a~z'
해당 문자열의 출현횟수를 담은 배열
[0, ...0] 을 만들어주고 그다음에 처리


*/

// const str = require('fs')
//   .readFileSync('input.txt')
//   .toString()
//   .trim()
//   .toUpperCase();
// let dic = {};
// for (let i = 0; i < str.length; i++) {
//   dic[str[i]] = dic[str[i]] ? ++dic[str[i]] : 1;
// }
// let max = 0;
// let isMultiPeople = false;
// let result = '';
// for (const property in dic) {
//   if (max < dic[property]) {
//     isMultiPeople = false;
//     result = property;
//     max = dic[property];
//   } else if (max === dic[property]) {
//     isMultiPeople = true;
//   }
// }

// console.log(isMultiPeople ? '?' : result);

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const str = require('fs').readFileSync(filePath, 'utf-8').trim().toUpperCase();


function mostFrequentChar(str) {
  let max = 0;
  let maxChar = '';
  let counter = Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    let codeNum = str[i].charCodeAt() - 65;
    counter[codeNum]++;
    if (max < counter[codeNum]) {
      max = counter[codeNum];
      maxChar = str[i];
    } else if (max === counter[codeNum]) {
      maxChar = '?';
    }
  }
  return maxChar;
}
console.log(mostFrequentChar(str));