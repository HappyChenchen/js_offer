//输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
//如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

/*
1.后续遍历我们可以知道，最右边的是根节点r。

2.通过根节点r我们可以判断左子树和右子树。

3.判断左子树中的每个值是否小于r,右子树的每个值是否大于r.

4.对左、右子树递归判断
*/

// 递归版
function VerifySquenceOfBST(sequence) {
  if (!sequence.length) return false;
  return judge(sequence, 0, sequence.length - 1);
}

function judge(a, l, r) {
  if (l >= r) return true;
  let i = r;
  while (a[i - 1] > a[r] && i > l) i--;
  for (let j = i - 1; j >= l; j--) {
    if (a[j] > a[r]) return false;
  }
  return judge(a, l, i - 1) && judge(a, i, r - 1);
}

// 非递归版
function VerifySquenceOfBST2(sequence) {
  let n = sequence.length,
    i = 0;
  if (!n) return false;
  while (n--) {
    while (sequence[i] < sequence[n]) i++;
    while (sequence[i] > sequence[n]) i++;
    if (i < n) return false;
    i = 0;
  }
  return true;
}