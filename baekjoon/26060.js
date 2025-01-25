const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const set = new Set(['ChongChong']);

for (let meeting of input) {
  let [person1, person2] = meeting.split(' ');
  if (set.has(person1) || set.has(person2)) {
    set.add(person1);
    set.add(person2);
  }
}
console.log(set.size);
