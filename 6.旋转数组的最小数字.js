//把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

//O(n)
function minNumberInRotateArray1(rotateArray) {
  // write code here
  if (rotateArray.length === 0) return 0;
  for (var i = 0; i < rotateArray.length; i++) {
    if (rotateArray[i] > rotateArray[i + 1]) return rotateArray[i + 1];
  }
  return rotateArray[0];
}

//O(logn) 二分法
function minNumberInRotateArray2(rotateArray) {
  // write code here
  if (rotateArray.length === 0) return 0;
  var left = 0;
  var right = rotateArray.length - 1;
  while (right - left > 1) {
    var mid = left + (right - left) / 2;
    if (rotateArray[mid] > rotateArray[right]) {
      left = mid+1;
    } else if(rotateArray[mid] == rotateArray[right]){
      right = right-1;
    }else {
      right = mid;
    }
  }
  return rotateArray[left];
}

console.log(minNumberInRotateArray2([1,2,3,45]))