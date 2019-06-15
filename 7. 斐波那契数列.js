//斐波那契数列第N项目

//递归
function Fibonacci(n) {
  // write code here、
  var f = [0, 1];
  for (var i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}

//动态规划
function Fibonacci(n) {
  var f=0,g=1;
  while (--n){
    g=f+g;
    f=g-f;
  }
  return f;
}