//一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。


//递归
function jumpFloor1(number) {
  // write code here
  if (number < 2) {
    return 1
  }
  var arr = [1, 1];
  for (var i = 2; i <= number; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[number]
}

//动态规划
function jumpFloor2(number) {
    // write code here
    var f=1,g=2;
    while (--number){
      g=f+g;
      f=g-f;
    }
    return f;
}