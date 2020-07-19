/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/**
 * 方法： 二分查找
 *  时间复杂度为O(logmn)
 *  空间复杂度为O(1)
 *  
 *  假设如下是一维数组
 */
var search = function(matrix, target) {
    if (matrix.length == 0) return false;

    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
        let mid = (left + right) >>> 1;
        if(matrix[mid] == target) {
            return true;
        } else if(matrix[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};

var getRow = function(matrix, target) {
    let top = 0;
    let bottom = matrix.length - 1;
    let col = matrix[0].length - 1;

    while (top < bottom) {
        let mid = parseInt((top + bottom) / 2);

        if (matrix[mid][col] < target) {
            top = mid + 1;
        } else {
            bottom = mid;
        }
    }

    return top;
};

var searchMatrix = function(matrix, target) {
    if (matrix.length == 0) return false;

    let row = getRow(matrix, target);
    console.log(row);
    return search(matrix[row], target);
};