const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const time = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

function countMultiples3(str) {
  let [start, finish] = str.split(' ').map((v) => +v.replaceAll(':', ''));
  console.log(start, finish);
  let count = 0;
  /*
  24시 중에서 count 해야하는 지점들

  0~59
  100~159 200 259 ...
  1000~1059 1100~1159
  5900~5959 
  10000~10059
  230000~230059
  235900~235959
  000000 


  */



}

time.map((v) => countMultiples3(v));
