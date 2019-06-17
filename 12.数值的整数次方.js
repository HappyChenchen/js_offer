//给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

function Power1(base, exponent) {
    // write code here
    return Math.pow(base, exponent);
}


function Power2(base, exponent) {
    var result = 1;
    if (exponent === 0) {
        return 1;
    }
    for (var i = 0; i < Math.abs(exponent); i++) {
        result *= base;
    }
    if (exponent < 0) {
        result = 1 / result;
    }
    return result;
}


function Power3(base, exponent) {
    if (n < 0) {
        if (x <= 0) {
            throw new Error("分母不能小于等于0");
        } else {
            if (-n % 2 == 1) {
                return 1 / (Power(x, -n - 1) * x);
            } else {
                var r = 1 / Power(x, -n / 2);
                return r * r;
            }
        }
    }
    if (n == 0) {
        return 1;
    } else {
        if (n % 2 == 1) {
            return Power(x, n - 1) * x;
        } else {
            var r = Power(x, n / 2);
            return r * r;
        }
    }
}