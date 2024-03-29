//从上往下打印出二叉树的每个节点，同层节点从左至右打印。

function PrintFromTopToBottom(root) {
    const queue = [],
        res = [];
    if (root === null) {
        return res;
    }
    queue.push(root);
    while (queue.length) {
        const pRoot = queue.shift();
        if (pRoot.left !== null) {
            queue.push(pRoot.left);
        }
        if (pRoot.right !== null) {
            queue.push(pRoot.right);
        }
        res.push(pRoot.val);
    }
    return res;
}


