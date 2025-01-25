const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

if (k === 1) {
  console.log(0);
} else {
  let s = '0';
  let num;
  for (let i = 1; i <= n; i++) {
    s += i;
    num = Number(s);
    num %= k;
    s = String(num);
  }
  console.log(s);
}

/*

  12345

  나누기에 대한 공부가 필요하다.
  
k가 1이면 답은 0이다.
계속 나머지를 구하면 어떨까



  */
