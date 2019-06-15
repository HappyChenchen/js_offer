//输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。


//判断是否为奇数，统计奇数个数，然后新建数组，把所有奇数存进去数组前面，剩下的存进去数组后面。
function reOrderArray(array) {
    var oddBegin=0;
    var oddCount=0;
    var resultArr=[];
    for(var i=0;i<array.length;i++){
        if(array[i]%2!==0){
            oddCount++;
        }
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] & 1) {
            resultArr[oddBegin++] = array[i];
        } else {
            resultArr[oddCount++] = array[i];
        }
    }
    return resultArr;
}

console.log(reOrderArray([1,2,4,2,31,23,17,14]));
