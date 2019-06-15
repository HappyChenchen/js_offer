//在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

//暴力循环也可以解决问题
function Find1(target, array) {
  // write code here
  for (var i of array) {
    if (i.indexOf(target) > -1) {
      return true;
    }
  }
  return false;
}


//但是题目给出条件是有顺序的，所以给出以下：
function Find2(target, array) {
  // write code here
  var n = array.length,
    var m = array[0].length;
  var row = n - 1,
    col = 0;
  if (m === 0 && n === 0) {
    return false;
  }
  while (row >= 0 && col <= m - 1) {
    if (array[row][col] > target) {
      row--;
    } else if (array[row][col] < target) {
      col++;
    } else {
      return true;
    }
  }
  return false;
}