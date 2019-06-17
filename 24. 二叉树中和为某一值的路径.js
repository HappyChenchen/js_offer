//输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
//路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径


//深度遍历整个树，并且把已经走过的节点的和与期望值作比较就行，如果走到底还不符合要求的话，就要回退值
function FindPath(root, expectNumber) {
  // write code here
  const list = [],
    listAll = [];
  return findpath(root, expectNumber, list, listAll);
}

function findpath(root, expectNumber, list, listAll) {
  if (root === null) {
    return listAll;
  }
  list.push(root.val);
  const x = expectNumber - root.val;
  if (root.left === null && root.right === null && x === 0) {
    listAll.push(Array.of(...list));
  }
  findpath(root.left, x, list, listAll);
  findpath(root.right, x, list, listAll);
  list.pop();
  return listAll;
}