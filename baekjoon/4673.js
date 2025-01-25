const arr = Array(10000)
  .fill(0)
  .map((v, i) => i);

for (let i = 0; i < 9999; i++) {
  let numArr = (i + 1).toString().split('');
  let perfectNum = i + 1 + numArr.reduce((prev, val) => prev + +val, 0);
  arr[perfectNum] = 0;
}
console.log(arr.filter((v) => v !== 0).join('\n'));
