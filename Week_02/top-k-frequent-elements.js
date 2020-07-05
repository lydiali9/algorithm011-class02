/**
 * 分析：一般看到“复杂度必须优于 O(n log n) , n 是数组的大小”
 * 就是用堆或者二叉搜索树，二分查找或者是排序（快速排序，归并排序和堆排序）类似这样的方法
 * 
 * 统计频次可以用hash表或者是数组，不知道下标就用map和hash表来统计，统计是O(n)的
 * 时间复杂度，统计完了要把频次排序，把排到前k的元素，这里可以用优先队列（大顶堆）
 * 
 * 方法一：利用 map 记录每个元素出现的频率，利用数组来比较排序元素
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 */
var topKFrequent = function(nums, k) {
    if(nums.length == 0) return [];
    var arr = [...new Set(nums)];
    var map = new Map();

    nums.map(item => {
        if(map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1)
        }
    })

    return arr.sort((a, b) => map.get(b) - map.get(a)).splice(0, k);
};