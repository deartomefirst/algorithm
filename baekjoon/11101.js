const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const T = Number(input[0]);

const answer = [];

for (let i = 1; i <= T; i++) {
  const arr = input[2 * i - 1].split(',');
  const dic = {};
  arr.forEach((v) => {
    let [name, val] = v.split(':');
    dic[name] = Number(val);
  });

  const comboList = input[2 * i].split('|');
  let min = 20001;
  comboList.forEach((v) => {
    const valArr = v.split('&');
    const value = valArr.reduce(
      (pre, cur) => (pre < dic[cur] ? dic[cur] : pre),
      0
    );
    if (value < min) {
      min = value;
    }
  });
  answer.push(min);
}
console.log(answer.join('\n'));
