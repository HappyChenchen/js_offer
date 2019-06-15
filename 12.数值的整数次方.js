//给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

function Power1(base, exponent) {
    // write code here
    return Math.pow(base, exponent);
}

//快速幂，不是很明白
function Power2(base, exponent) {
    // write code here
    var res = 1,
        n;
    if (exponent > 0) {
        // 指数大于0的情况下
        n = exponent;
    } else if (exponent < 0) {
        // 指数小于0的情况下
        if (!base) throw new Error('分母不能为0');
        n = -exponent;
    } else {
        // 指数等于0的情况下
        return 1;
    }
    while (n) {
        // 也可以用递归做，这里采用了循环
        if (n & 1)
        // 当指数为奇数时，包括了1
            res *= base;
        base *= base;
        n >>= 1;
    }
    return exponent > 0 ? res : 1 / res;
}