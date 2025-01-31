const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n').map(v=>v.split(' '));

const dic = input[0];
const reverseDic = Array(10).fill(0);
dic.forEach((v, i) => reverseDic[v] = String(i));
const [fa, fb] = input[1];


function calculation(num, funcArr) {
  return Number([...num].map(v => funcArr[v]).join(''));
}

const a = calculation(fa, reverseDic);
const b = calculation(fb, reverseDic);
const sum = String(a + b);
console.log(calculation(sum, dic));
/*
역함수의 결과를 reverseDic에 할당하고 반복되는 연산을 calculation 함수로 정리
*/
