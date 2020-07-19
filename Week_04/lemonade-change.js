/**
 * 思路分析：
 * 题意每张账单只能是5、10、20
 * 柠檬水均是5元一份
 * 店家自己没有零钱 
 * 
 * 当收到20的时候： 
 *  1. 优先匹配店家手里的一张10和一张5，如有返回true
 *      店家手里的20++
 *      店家手里的10--
 *      店家手里的5--
 *  2. 没有的话，就匹配店家手里的三张5，
 *      （（5--）--）--
 *      有三张5就返回true，
 *     否则返回false；
 *  当收到10的时候
 *  1. 优先匹配店家手里的一张5，有就返回true，
 *       10++；
 *         5--；
 *  当收到5的时候
 *   1. 店家手里的5++；
 *
 */
var lemonadeChange = function(bills) {
    var fiveCount = 0;
    var tenCount = 0;
    var twentyCount = 0;
    for (var i = 0; i < bills.length; i++) {
        if (bills[i] == 20) {
            if (fiveCount > 0 && tenCount > 0) {
                fiveCount--;
                tenCount--
                twentyCount++;
            } else if (fiveCount >= 3) {
                fiveCount -= 3;
            } else {
                return false;
            }
        } else if (bills[i] == 10) {
            if(fiveCount == 0) {
                return false;
            } else {
                fiveCount--;
                tenCount++;
            }
        } else if (bills[i] == 5) {
            fiveCount++;
        }
    }
    return true;
};