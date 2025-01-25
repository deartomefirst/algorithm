const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, M] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

const dp = [0, 0];





/*

26 - 24
2
4



23이면?
2
4
6





24 2
AY 
ZB
YA ZA
AZ BZ 

23 3
AX  1*2
AY BY  2*2*2
AZ BZ CZ 3*2*2




24 3
AYA  YAY YAZ
AZA AZB ZAY ZAZ
BZA BZB ZBZ



AY AZ
BZ
YA ZA
ZB



*/