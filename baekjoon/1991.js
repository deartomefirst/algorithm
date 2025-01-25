const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n');

const tree = {};

for (let i = 0; i < +N; i++) {
  let [parent, left, right] = input[i]
    .split(' ')
    .map((v) => (v === '.' ? null : v));

  tree[parent] = { left: left, right: right };
}

function preOrder(tree, answer, now) {
  answer.push(now);
  if (answer.length === +N) {
    console.log(answer.join(''));
    return;
  }

  if (tree[now].left !== null) {
    preOrder(tree, answer, tree[now].left);
  }
  if (tree[now].right !== null) {
    preOrder(tree, answer, tree[now].right);
  }
}

function inOrder(tree, answer, now) {
  if (tree[now].left !== null) {
    inOrder(tree, answer, tree[now].left);
  }
  answer.push(now);
  if (answer.length === +N) {
    console.log(answer.join(''));
    return;
  }
  if (tree[now].right !== null) {
    inOrder(tree, answer, tree[now].right);
  }
}

function postOrder(tree, answer, now) {
  if (tree[now].left !== null) {
    postOrder(tree, answer, tree[now].left);
  }
  if (tree[now].right !== null) {
    postOrder(tree, answer, tree[now].right);
  }
  answer.push(now);
  if (answer.length === +N) {
    console.log(answer.join(''));
    return;
  }
}

preOrder(tree, [], 'A');
inOrder(tree, [], 'A');
postOrder(tree, [], 'A');
