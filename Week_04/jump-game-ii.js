/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 类似题目： 54
 *  思路分析： 贪心算法
 *  时间复杂度为O(n)
 *  空间复杂度为O(1)
 * 
 * 解题技巧
此题也有可能出现第i个节点位置跳的距离大于末尾节点的，如果我们还是通过上述思路分析的那样，每次更新第i个节点的最远的跳的距离为下一个起跳点的话
假设共有n个节点符合题意，为最少跳的位置节点
前n-k个符合要求的起跳点可能一下跳不到末尾
但是第k+1之后的节点,其中的一个节点可能可以跳到，这个节点可能是倒数第一个，也可能是倒数第二个或第三个
意思是最后一个符合条件的节点位置出现的情况有两种
第一种是恰好在最后一个末尾位置
第二种是不在最后一个末尾位置，而是在倒数第k个位置
此种情况时说明已经达到来最优解，不用遍历到最后一位了，直接退出循环就好
 */
var jump = function(nums) {
    if (nums.length == 0) return 0;

    let steps = 0;
    let canJumpMax = 0;
    let last_canJumpMax = 0;

    for (var i = 0; i < nums.length - 1; i++) {
        canJumpMax = Math.max(canJumpMax, i + nums[i]);
        if (last_canJumpMax == i) { // 如上语句判断了，当前能到达的最远的距离，当最后一次能挑的step等于当前位置的时候，方可进行跳
            last_canJumpMax = canJumpMax;
            steps++;
        }
    }

    return steps;
};