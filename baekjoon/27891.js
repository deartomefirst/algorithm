const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim();

/*

abcdefghijklmnopqrstuvwxyz

northlondo  25  11
branksomeh  10  3
koreainter  4   13
stjohnsbur  25  23

끝 문자의 숫자 차이로 원래 학교를 알 수 있다.
*/

let diff = input[9].charCodeAt() - input[8].charCodeAt();

switch (diff) {
  case 11:
  case -15:
    console.log('NLCS');
    break;
  case 3:
  case -23:
    console.log('BHA');
    break;
  case 13:
  case -13:
    console.log('KIS');
    break;
  default:
    console.log('SJA');
}

// 돌아서 확인하고 싶은거면... 