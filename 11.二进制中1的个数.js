//输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

//二进制位运算
function NumberOf1(n) {
    // write code here
    var count = 0;
    while (n) {
        n = n & n - 1;
        count++;
    }
    return count;
}

console.log(NumberOf1(127));