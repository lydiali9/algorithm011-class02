/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
/**
 * 思路分析： 贪心算法，优先满足胃口小的小朋友
 *  优先升序排序，饼干尺寸数组s，和胃口值数组g
 *  最大客满足孩子的数量为count = 0；
 *  胃口小的拿小的，胃口大的拿大的
 *  两边升序，然后一一对比
 *  当胃口i <= 饼干尺寸j时；
 *      i++；
 *      j++；
 *      count++；
 *  当饼干尺寸j < 小朋友胃口值i 时；说明小朋友胃口大，饼干要换更大的
 *      j++；
 * 
 * 直到找到边界值，终止；
 *      
 */
var findContentChildren = function(g, s) {
    if (g.length == 0 || s.length == 0) return 0;

    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    var i = 0;
    var j = 0;
    var count = 0;

    while(i < g.length && j < s.length) {
        if(g[i] <= s[j]) {
            i++;
            j++;
            count++;
        } else {
            j++;
        }
    }

    return count;
};