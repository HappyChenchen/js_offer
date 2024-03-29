//用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

//栈是先进后出，队列是先进先出，因此两个栈，一个用来push，一个用来pop，同时注意下两个栈不为空的时候。
var stack1 = [],
  stack2 = [];

function push(node) {
  stack1.push(node)
}

function pop() {
  if (stack2.length == 0) {
    if (stack1.length === 0) {
      return null
    } else {
      var len = stack1.length;
      for (var i = 0; i < len; i++) {
        stack2.push(stack1.pop())
      }
      return stack2.pop()
    }
  } else {
    return stack2.pop();
  }
}