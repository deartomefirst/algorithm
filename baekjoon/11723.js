const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [cmdLength, ...cmds] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

let set = new Set();
let result = [];
for (let i = 0; i < +cmdLength; i++) {
  let [cmd, num] = cmds[i].trim().split(' ');
  num = +num;

  switch (cmd) {
    case 'add':
      set.add(num);
      break;
    case 'remove':
      set.delete(num);
      break;
    case 'check':
      result.push(set.has(num) ? 1 : 0);
      break;
    case 'toggle':
      if (set.has(num)) {
        set.delete(num);
      } else {
        set.add(num);
      }
      break;
    case 'all':
      set = new Set(Array.from({ length: 20 }, (v, i) => i + 1));
      break;
    default:
      set.clear();
  }

  // if (cmd === 'add') {
  //   set.add(parseInt(num));
  // } else if (cmd === 'remove') {
  //   set.delete(num);
  // } else if (cmd === 'check') {
  //   if (set.has(num)) {
  //     result.push(1);
  //   } else {
  //     result.push(0);
  //   }
  // } else if (cmd === 'toggle') {
  //   if (set.has(num)) {
  //     set.delete(num);
  //   } else {
  //     set.add(num);
  //   }
  // } else if (cmd === 'all') {
  //   set = new Set(Array.from({ length: 10 }, (v, i) => i + 1));
  // } else if (cmd === 'empty') {
  //   set.clear();
  // }
}
console.log(result.join('\n'));
