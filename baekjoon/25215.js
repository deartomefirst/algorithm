const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const str = require('fs').readFileSync(filePath, 'utf-8').trim();

let buttonPresses = 0;
let isDiamondActive = false; // 마름모 버튼 상태
let lastChar = ''; // 마지막 입력된 문자

for (const char of str) {
  const isUpperCase = char === char.toUpperCase(); // 현재 문자 대문자 여부

  // 현재 입력할 문자의 대소문자 상태에 따라 버튼 누르기
  if (isUpperCase) {
    // 대문자 입력
    if (!isDiamondActive) {
      buttonPresses += 1; // 마름모 버튼을 활성화
      isDiamondActive = true; // 상태 변경
    }
  } else {
    // 소문자 입력
    if (isDiamondActive) {
      buttonPresses += 1; // 마름모 버튼을 비활성화
      isDiamondActive = false; // 상태 변경
    }
  }

  // 마지막 문자 처리
  if (lastChar) {
    if (lastChar !== char) {
      if (isUpperCase && !isDiamondActive) {
        buttonPresses += 1; // 별 버튼을 눌러 대문자로 변경
      } else if (!isUpperCase && isDiamondActive) {
        buttonPresses += 1; // 별 버튼을 눌러 소문자로 변경
      }
    }
  }

  // 문자 입력 처리
  buttonPresses += 1; // 문자 입력
  lastChar = char; // 마지막 문자 업데이트
}

console.log(buttonPresses);
