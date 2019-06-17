//操作给定的二叉树，将其变换为源二叉树的镜像。


function Mirror(root)
{
    if(root ==null ) return null;
    Mirror(root.left);
    Mirror(root.right);
    [root.left, root.right] = [root.right, root.left];
    return root;
}