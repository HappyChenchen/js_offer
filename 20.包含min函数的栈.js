//定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

//剑指offer里面推荐的思路就是增加了一个辅助栈，每次压入数据栈时，把当前栈里面最小的值压入辅助栈当中。这样辅助栈的栈顶数据一直是数据栈中最小的值。

const stack = [],
minStack = [];
var tmp = null;
function push(node) {
    if (tmp !== null) {
        if (tmp > node) {
            tmp = node;
        }
        stack.push(node);
        minStack.push(tmp);
    } else {
        tmp = node;
        stack.push(node);
        minStack.push(tmp);
    }
}
function pop() {
    stack.pop();
    minStack.pop();
}
function top() {
    return stack[stack.length - 1];
}
function min() {
    return minStack[minStack.length - 1];
}